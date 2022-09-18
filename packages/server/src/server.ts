import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinute, convertMinuteStringToHour } from "./utils";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())
const prisma = new PrismaClient({});

app.post("/games/:id/ads", async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    discord,
    hourEnd,
    hourStart,
    name,
    useVoiceChannel,
    weekDays,
    yearsPlaying,
  } = request.body;

  const createdAd = await prisma.ad.create({
    data: {
      gameId: id,
      name,
      yearsPlaying,
      weekDays: weekDays.join(','),
      hourStart: convertHourStringToMinute(hourStart),
      hourEnd: convertHourStringToMinute(hourEnd),
      useVoiceChannel,
      discord
    },
  });
  return response.status(201).json(createdAd);
});

app.get("/games", async (request: Request, response: Response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.get("/games/:id/ads", async (request: Request, response: Response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response.json(
    ads.map((ad: any) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: convertMinuteStringToHour(ad.hourStart),
        hourEnd: convertMinuteStringToHour(ad.hourEnd)
      };
    })
  );
});

app.get("/ads/:id/discord", async (request: Request, response: Response) => {
  const adsId = request.params.id;

  const ads = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adsId,
    },
  });
  return response.json({
    discord: ads.discord,
  });
});

app.listen(8000);
