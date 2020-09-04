import {modelOptions, prop} from '@typegoose/typegoose'
import {ApiProperty} from "@nestjs/swagger";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})


export class User {
    @ApiProperty({
        description: '用户名',
        example: 'username'
    })
    @prop()
    username: string


    @ApiProperty({
        description: '密码',
        example: 'password'
    })
    @prop()
    password: string
}
