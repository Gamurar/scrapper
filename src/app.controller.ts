import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { RecipesService } from "./models/recipes/recipes.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly recipesService: RecipesService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("recipes")
  async getRecipes() {
    const recipes = await this.appService.getRecipes();
    return await this.recipesService.saveAll(recipes);
  }
}
