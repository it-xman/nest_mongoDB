import {Controller} from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud";
import {Periods} from "@libs/db/models/periods.model";
import {InjectModel} from "nestjs-typegoose";
import {ReturnModelType} from "@typegoose/typegoose";
import {ApiTags} from "@nestjs/swagger";

@Crud({
    model: Periods
})

@Controller('periods')
@ApiTags('课时')
export class PeriodsController {
    constructor(
        @InjectModel(Periods) private readonly model: ReturnModelType<typeof Periods>
    ) {
    }
}
