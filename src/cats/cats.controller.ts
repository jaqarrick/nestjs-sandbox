import { Controller, Get, Res, Req, Post, Redirect, Param, Body, Put } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get('showmecats')
    @Redirect('https://en.wikipedia.org/wiki/Cat#/media/File:Cat_poster_1.jpg', 301)

    @Get('calico')
    findCalico(): string {
        return 'This response returns calico cats'
    }


    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }


}
