const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class Favorites {
   @prop({ required: true, trim: true })
   user_id: string;

   @prop({ type: () => [String], required: false, trim: true })
   favorites: Array<string>;
}

export const FavoritesCollection = getModelForClass(Favorites);
