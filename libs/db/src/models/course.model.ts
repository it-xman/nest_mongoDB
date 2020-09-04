import {modelOptions, prop, Ref} from '@typegoose/typegoose'
import {ApiProperty} from "@nestjs/swagger";
import {Periods} from "@libs/db/models/periods.model";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Course {
    // 告诉swagger需要展示这个属性
    @ApiProperty({
        description: '课程名称'
    })
    // 告诉数据库需要这个字段
    @prop()
    name: string


    @ApiProperty({
        description: '封面图'
    })
    @prop()
    cover: string

    @prop({ref: 'Periods'})
    periods: Ref<Periods>[]
}
