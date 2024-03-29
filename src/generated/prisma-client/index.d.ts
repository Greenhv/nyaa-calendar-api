// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  anime: (where?: AnimeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  anime: (where: AnimeWhereUniqueInput) => AnimeNullablePromise;
  animes: (args?: {
    where?: AnimeWhereInput;
    orderBy?: AnimeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Anime>;
  animesConnection: (args?: {
    where?: AnimeWhereInput;
    orderBy?: AnimeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AnimeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAnime: (data: AnimeCreateInput) => AnimePromise;
  updateAnime: (args: {
    data: AnimeUpdateInput;
    where: AnimeWhereUniqueInput;
  }) => AnimePromise;
  updateManyAnimes: (args: {
    data: AnimeUpdateManyMutationInput;
    where?: AnimeWhereInput;
  }) => BatchPayloadPromise;
  upsertAnime: (args: {
    where: AnimeWhereUniqueInput;
    create: AnimeCreateInput;
    update: AnimeUpdateInput;
  }) => AnimePromise;
  deleteAnime: (where: AnimeWhereUniqueInput) => AnimePromise;
  deleteManyAnimes: (where?: AnimeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  anime: (
    where?: AnimeSubscriptionWhereInput
  ) => AnimeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AnimeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "episode_ASC"
  | "episode_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface AnimeCreateInput {
  id?: Maybe<ID_Input>;
  slug: String;
  published?: Maybe<Boolean>;
  title: String;
  episode: Int;
}

export interface AnimeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  slug?: Maybe<String>;
  slug_not?: Maybe<String>;
  slug_in?: Maybe<String[] | String>;
  slug_not_in?: Maybe<String[] | String>;
  slug_lt?: Maybe<String>;
  slug_lte?: Maybe<String>;
  slug_gt?: Maybe<String>;
  slug_gte?: Maybe<String>;
  slug_contains?: Maybe<String>;
  slug_not_contains?: Maybe<String>;
  slug_starts_with?: Maybe<String>;
  slug_not_starts_with?: Maybe<String>;
  slug_ends_with?: Maybe<String>;
  slug_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  episode?: Maybe<Int>;
  episode_not?: Maybe<Int>;
  episode_in?: Maybe<Int[] | Int>;
  episode_not_in?: Maybe<Int[] | Int>;
  episode_lt?: Maybe<Int>;
  episode_lte?: Maybe<Int>;
  episode_gt?: Maybe<Int>;
  episode_gte?: Maybe<Int>;
  AND?: Maybe<AnimeWhereInput[] | AnimeWhereInput>;
  OR?: Maybe<AnimeWhereInput[] | AnimeWhereInput>;
  NOT?: Maybe<AnimeWhereInput[] | AnimeWhereInput>;
}

export interface AnimeUpdateInput {
  slug?: Maybe<String>;
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  episode?: Maybe<Int>;
}

export interface AnimeUpdateManyMutationInput {
  slug?: Maybe<String>;
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  episode?: Maybe<Int>;
}

export interface AnimeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AnimeWhereInput>;
  AND?: Maybe<AnimeSubscriptionWhereInput[] | AnimeSubscriptionWhereInput>;
  OR?: Maybe<AnimeSubscriptionWhereInput[] | AnimeSubscriptionWhereInput>;
  NOT?: Maybe<AnimeSubscriptionWhereInput[] | AnimeSubscriptionWhereInput>;
}

export type AnimeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateAnime {
  count: Int;
}

export interface AggregateAnimePromise
  extends Promise<AggregateAnime>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAnimeSubscription
  extends Promise<AsyncIterator<AggregateAnime>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AnimePreviousValues {
  id: ID_Output;
  slug: String;
  published: Boolean;
  title: String;
  episode: Int;
}

export interface AnimePreviousValuesPromise
  extends Promise<AnimePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  episode: () => Promise<Int>;
}

export interface AnimePreviousValuesSubscription
  extends Promise<AsyncIterator<AnimePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  episode: () => Promise<AsyncIterator<Int>>;
}

export interface AnimeEdge {
  node: Anime;
  cursor: String;
}

export interface AnimeEdgePromise extends Promise<AnimeEdge>, Fragmentable {
  node: <T = AnimePromise>() => T;
  cursor: () => Promise<String>;
}

export interface AnimeEdgeSubscription
  extends Promise<AsyncIterator<AnimeEdge>>,
    Fragmentable {
  node: <T = AnimeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AnimeSubscriptionPayload {
  mutation: MutationType;
  node: Anime;
  updatedFields: String[];
  previousValues: AnimePreviousValues;
}

export interface AnimeSubscriptionPayloadPromise
  extends Promise<AnimeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AnimePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AnimePreviousValuesPromise>() => T;
}

export interface AnimeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AnimeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AnimeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AnimePreviousValuesSubscription>() => T;
}

export interface Anime {
  id: ID_Output;
  slug: String;
  published: Boolean;
  title: String;
  episode: Int;
}

export interface AnimePromise extends Promise<Anime>, Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  episode: () => Promise<Int>;
}

export interface AnimeSubscription
  extends Promise<AsyncIterator<Anime>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  episode: () => Promise<AsyncIterator<Int>>;
}

export interface AnimeNullablePromise
  extends Promise<Anime | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  episode: () => Promise<Int>;
}

export interface AnimeConnection {
  pageInfo: PageInfo;
  edges: AnimeEdge[];
}

export interface AnimeConnectionPromise
  extends Promise<AnimeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AnimeEdge>>() => T;
  aggregate: <T = AggregateAnimePromise>() => T;
}

export interface AnimeConnectionSubscription
  extends Promise<AsyncIterator<AnimeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AnimeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAnimeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Anime",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
