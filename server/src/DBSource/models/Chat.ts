const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class Chat {
   @prop({ required: true, trim: true })
   to: string;

   @prop({ required: true, trim: true })
   message: string;
}

export const ChatCollection = getModelForClass(Chat);
