import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/greeting")
  getGreetingRoute() {
    return "Hallo Welt!";
  }
  @Get("/bye")
  getByeThere() {
    return "Good Bye!";
  }
}
