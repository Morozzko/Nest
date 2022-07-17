import { Module } from '@nestjs/common'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.env.UPLOAD_LOCATION)
    })],
  controllers: [],
  providers: []
})
export class AppModule {

}
