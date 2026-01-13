import * as functions from 'firebase-functions';
import { db } from './firebase-admin';

export const createTomorrowNotifications =
    functions.pubsub
        .schedule('every day 00:10')
        .timeZone('Asia/Ho_Chi_Minh')
        .onRun(async () => {
            // logic tạo notification
        });
