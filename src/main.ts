import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
   
  const app = await NestFactory.create(AppModule, {cors: {
    origin: true,
    preflightContinue: false,
  }});
  app.setGlobalPrefix('Agenda');

  const options = new DocumentBuilder()
    .setTitle('Agenda Curricular')
    .setDescription('La Agenda Curricular se creo para que ayude a administrar el tiempo y ordenar el orden del día')
    .setVersion('1.0')
    .setBasePath('Agenda')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000);
}
bootstrap();
