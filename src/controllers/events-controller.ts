import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {eventsService} from '@/services/events-service';

export async function getDefaultEvent(_req: Request, res: Response) {
  try {
    const event = await eventsService.getFirstEvent();
    return res.status(httpStatus.OK).send(event);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}
