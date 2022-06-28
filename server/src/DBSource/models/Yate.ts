const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class Yate {
   @prop({ required: true, trim: true })
   make: string;

   @prop({ required: true })
   type: number;

   @prop({ required: true })
   year: number;

   @prop({ required: true })
   cabins: number;

   @prop({ required: true })
   bathrooms: number;

   @prop({ required: true })
   guests: number;

   @prop({ required: true })
   length: number;

   @prop({ required: true })
   beam: number;

   @prop({ required: true })
   draft: number;

   @prop({ required: true })
   fuelCapacity: number;

   @prop({ required: true })
   waterCapacity: number;

   @prop({ required: true })
   cruiseVel: number;

   @prop({ required: true, trim: true })
   fuelType: string;

   @prop({ required: true, trim: true })
   location: string;

   @prop({ required: true, trim: true })
   description: string;

   @prop({ type: () => [String], required: false, trim: true })
   pictures: Array<string>;
}

export const YateCollection = getModelForClass(Yate);
