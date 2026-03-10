import { db } from "./db";
import { contactMessages, type CreateContactMessageRequest, type ContactMessageResponse } from "@shared/schema";

export const DATABASE_NOT_CONFIGURED = "DATABASE_NOT_CONFIGURED";

export interface IStorage {
  createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse> {
    if (!db) {
      throw new Error(DATABASE_NOT_CONFIGURED);
    }
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
