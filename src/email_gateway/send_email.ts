import { getNotificationData } from "./model";
import { transporter } from "./mail_server";
import { NotificationPayload } from "../types/payloadType";

export const sendEmail = async (payload: NotificationPayload) => {
  const notificationData: any = await getNotificationData(payload);

  const mailData = {
    from: "vigan.mustafa.vm@gmail.com",
    to: notificationData.rows.person_email,
    subject: notificationData.rows.subject,
    html: notificationData.rows.email_content,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
