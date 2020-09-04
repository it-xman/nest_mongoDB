import {modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Periods {

    @prop()
    name: string

    @prop()
    file: string

}
