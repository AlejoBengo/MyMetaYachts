const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class User {
   @prop({ required: true, trim: true })
   firstname: string;

   @prop({ required: true, trim: true })
   lastname: string;

   @prop({ required: true, unique: true, trim: true, lowercase: true })
   email: string;

   @prop({ required: true })
   password: string;

   @prop({ required: true, trim: true })
   role: string;

   @prop({ required: true, trim: true })
   country: string;

   @prop({ required: true, trim: true })
   city: string;

   @prop({ required: true, trim: true })
   picture: string;
}

export const UserCollection = getModelForClass(User);
