import { pool } from "../db/db";
import { NotificationPayload } from "../types/payloadType";

export const getNotificationData = (payload: NotificationPayload) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: `SELECT * FROM sp_get_notification_data($1)`,
      values: [payload.notification_id],
    };
    pool.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
