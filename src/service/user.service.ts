import { DocumentDefinition } from '@types/mongoose';
import UserModel, { UserDocument } from '../models/user.model';
import logger from '../utils/logger';

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    logger.error(e);
    throw new Error(e);
  }
}
