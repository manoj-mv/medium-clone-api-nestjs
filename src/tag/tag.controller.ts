import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagsResponseInterface } from './tag-response.interface';

@Controller('tags')
export class TagController {
    constructor(private readonly tagsService: TagService) { }
    @Get()
    async getTags(): Promise<TagsResponseInterface> {
        const tags = await this.tagsService.getTags();
        return {
            tags: tags.map(tag => tag.name)
        }
    }

}
