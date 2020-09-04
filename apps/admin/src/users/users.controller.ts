import {Controller} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {User} from "@libs/db/models/user.model";
import {Crud} from "nestjs-mongoose-crud";
import {ApiTags} from "@nestjs/swagger";

@Crud({
    model: User
})

@Controller('users')
// 给swagger分组 这个里面的api都被分配到 用户 组
@ApiTags('用户')
export class UsersController {
    constructor(
        @InjectModel(User) private readonly model
    ) {
    }
}
