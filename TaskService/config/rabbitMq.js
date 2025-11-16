import amqp from "amqplib";

export let channel;
let connection;

async function connetRabbitMq(retries = 5) {
  while (retries) {
    try {
      connection = await amqp.connect("amqp://rabbitmq");
      channel = await connection.createChannel();

      await channel.assertQueue("task_created");
      console.log("Connected to RabbitMQ");
      return;
    } catch (error) {
      console.log("RabbitMQ connection Error", error);
      retries--;
      console.log("Retrying again", retries);

    }
  }
}
export default connetRabbitMq;
