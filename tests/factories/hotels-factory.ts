import faker from '@faker-js/faker';
import { Hotel, Room } from '@prisma/client';
import { prisma } from '@/config';

export async function createHotel(): Promise<Hotel> {
  return prisma.hotel.create({
    data: { name: faker.name.findName(), image: faker.image.imageUrl() },
  });
}

export async function createRoom(hotelId: number): Promise<Room> {
  return prisma.room.create({
    data: { name: faker.name.findName(), capacity: faker.datatype.number(), hotelId },
  });
}
export async function createHotelTicketType() {
    return prisma.ticketType.create({
      data: {
        name: faker.name.findName(),
        price: faker.datatype.number(),
        isRemote: false,
        includesHotel: true,
      },
    });
  }
  export async function createNoHotelTicketType() {
    return prisma.ticketType.create({
      data: {
        name: faker.name.findName(),
        price: faker.datatype.number(),
        isRemote: false,
        includesHotel: false,
      },
    });
  }
  export async function createRemoteTicketType() {
    return prisma.ticketType.create({
      data: {
        name: faker.name.findName(),
        price: faker.datatype.number(),
        isRemote: true,
        includesHotel: faker.datatype.boolean(),
      },
    });
  }