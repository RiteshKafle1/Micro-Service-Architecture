import amqp from "amqplib";

let channel, connection;

async function connet() {
  try {
    connection = await amqp.connect("amqp://rabbitmq");
    channel = await connection.createChannel();

    await channel.assertQueue("task_created");
    console.log("Notification service");

    channel.consume("task_created", (msg) => {
      const taskData = JSON.parse(msg.content.toString());
      console.log("Notification :NEW Task :", taskData.title);
      console.log("Notification :NEW Task :", taskData);

      channel.ack(msg);
    });
  } catch (error) {
    console.log("RabbitMQ connection Error", error);
  }
}

connet();
