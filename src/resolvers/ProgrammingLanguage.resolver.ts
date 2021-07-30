import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
  } from "type-graphql";
  import { ProgrammingLanguage } from "../entities/ProgrammingLanguage";
  
//   @InputType()
//   class ProgrammingLanguageInput {
//     @Field()
//     name: string;
  
//   }
  
  @InputType()
  class ProgrammingLanguageUpdateInput {
    @Field(() => String, { nullable: true })
    name?: string;
  
    @Field(() => String, { nullable: true })
    first_appeared?: string;

    @Field()
    designed_by?: string;

    @Field()
    typing?: string;

    @Field()
    stable_release?: string;

    @Field()
    os?: string;
  }
  
  @Resolver()
  export class ProgrammingLanguageResolver {
    @Mutation(() => ProgrammingLanguage)
    async createPLanguage(@Arg("name") name: string) {
      const pLanguage = await ProgrammingLanguage.create({name}).save();
      return pLanguage;
    }
  
    @Mutation(() => Boolean)
    async updatePLanguage(
      @Arg("id", () => Int) id: number,
      @Arg("input", () => ProgrammingLanguageUpdateInput) input: ProgrammingLanguageUpdateInput
    ) {
      await ProgrammingLanguage.update({ id }, input);
      return true;
    }
  
    @Mutation(() => Boolean)
    async deletePLanguage(@Arg("id", () => Int) id: number) {
      await ProgrammingLanguage.delete({ id });
      return true;
    }
  
    @Query(() => [ProgrammingLanguage])
    programmingLanguages() {
      return ProgrammingLanguage.find();
    }
  }