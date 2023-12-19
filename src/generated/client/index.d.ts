
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BinhLuan
 * 
 */
export type BinhLuan = $Result.DefaultSelection<Prisma.$BinhLuanPayload>
/**
 * Model DatPhong
 * 
 */
export type DatPhong = $Result.DefaultSelection<Prisma.$DatPhongPayload>
/**
 * Model NguoiDung
 * 
 */
export type NguoiDung = $Result.DefaultSelection<Prisma.$NguoiDungPayload>
/**
 * Model Phong
 * 
 */
export type Phong = $Result.DefaultSelection<Prisma.$PhongPayload>
/**
 * Model ViTri
 * 
 */
export type ViTri = $Result.DefaultSelection<Prisma.$ViTriPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BinhLuans
 * const binhLuans = await prisma.binhLuan.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BinhLuans
   * const binhLuans = await prisma.binhLuan.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.binhLuan`: Exposes CRUD operations for the **BinhLuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinhLuans
    * const binhLuans = await prisma.binhLuan.findMany()
    * ```
    */
  get binhLuan(): Prisma.BinhLuanDelegate<ExtArgs>;

  /**
   * `prisma.datPhong`: Exposes CRUD operations for the **DatPhong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatPhongs
    * const datPhongs = await prisma.datPhong.findMany()
    * ```
    */
  get datPhong(): Prisma.DatPhongDelegate<ExtArgs>;

  /**
   * `prisma.nguoiDung`: Exposes CRUD operations for the **NguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NguoiDungs
    * const nguoiDungs = await prisma.nguoiDung.findMany()
    * ```
    */
  get nguoiDung(): Prisma.NguoiDungDelegate<ExtArgs>;

  /**
   * `prisma.phong`: Exposes CRUD operations for the **Phong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phongs
    * const phongs = await prisma.phong.findMany()
    * ```
    */
  get phong(): Prisma.PhongDelegate<ExtArgs>;

  /**
   * `prisma.viTri`: Exposes CRUD operations for the **ViTri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViTris
    * const viTris = await prisma.viTri.findMany()
    * ```
    */
  get viTri(): Prisma.ViTriDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BinhLuan: 'BinhLuan',
    DatPhong: 'DatPhong',
    NguoiDung: 'NguoiDung',
    Phong: 'Phong',
    ViTri: 'ViTri'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'binhLuan' | 'datPhong' | 'nguoiDung' | 'phong' | 'viTri'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      BinhLuan: {
        payload: Prisma.$BinhLuanPayload<ExtArgs>
        fields: Prisma.BinhLuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinhLuanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinhLuanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          findFirst: {
            args: Prisma.BinhLuanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinhLuanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          findMany: {
            args: Prisma.BinhLuanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>[]
          }
          create: {
            args: Prisma.BinhLuanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          createMany: {
            args: Prisma.BinhLuanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BinhLuanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          update: {
            args: Prisma.BinhLuanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          deleteMany: {
            args: Prisma.BinhLuanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BinhLuanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BinhLuanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BinhLuanPayload>
          }
          aggregate: {
            args: Prisma.BinhLuanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBinhLuan>
          }
          groupBy: {
            args: Prisma.BinhLuanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BinhLuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinhLuanCountArgs<ExtArgs>,
            result: $Utils.Optional<BinhLuanCountAggregateOutputType> | number
          }
        }
      }
      DatPhong: {
        payload: Prisma.$DatPhongPayload<ExtArgs>
        fields: Prisma.DatPhongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatPhongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatPhongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          findFirst: {
            args: Prisma.DatPhongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatPhongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          findMany: {
            args: Prisma.DatPhongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>[]
          }
          create: {
            args: Prisma.DatPhongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          createMany: {
            args: Prisma.DatPhongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DatPhongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          update: {
            args: Prisma.DatPhongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          deleteMany: {
            args: Prisma.DatPhongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DatPhongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DatPhongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatPhongPayload>
          }
          aggregate: {
            args: Prisma.DatPhongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDatPhong>
          }
          groupBy: {
            args: Prisma.DatPhongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DatPhongGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatPhongCountArgs<ExtArgs>,
            result: $Utils.Optional<DatPhongCountAggregateOutputType> | number
          }
        }
      }
      NguoiDung: {
        payload: Prisma.$NguoiDungPayload<ExtArgs>
        fields: Prisma.NguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NguoiDungFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NguoiDungFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findFirst: {
            args: Prisma.NguoiDungFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NguoiDungFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findMany: {
            args: Prisma.NguoiDungFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>[]
          }
          create: {
            args: Prisma.NguoiDungCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          createMany: {
            args: Prisma.NguoiDungCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NguoiDungDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          update: {
            args: Prisma.NguoiDungUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.NguoiDungDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NguoiDungUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NguoiDungUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          aggregate: {
            args: Prisma.NguoiDungAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNguoiDung>
          }
          groupBy: {
            args: Prisma.NguoiDungGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NguoiDungCountArgs<ExtArgs>,
            result: $Utils.Optional<NguoiDungCountAggregateOutputType> | number
          }
        }
      }
      Phong: {
        payload: Prisma.$PhongPayload<ExtArgs>
        fields: Prisma.PhongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          findFirst: {
            args: Prisma.PhongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          findMany: {
            args: Prisma.PhongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>[]
          }
          create: {
            args: Prisma.PhongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          createMany: {
            args: Prisma.PhongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          update: {
            args: Prisma.PhongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          deleteMany: {
            args: Prisma.PhongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhongPayload>
          }
          aggregate: {
            args: Prisma.PhongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhong>
          }
          groupBy: {
            args: Prisma.PhongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhongGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhongCountArgs<ExtArgs>,
            result: $Utils.Optional<PhongCountAggregateOutputType> | number
          }
        }
      }
      ViTri: {
        payload: Prisma.$ViTriPayload<ExtArgs>
        fields: Prisma.ViTriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViTriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViTriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          findFirst: {
            args: Prisma.ViTriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViTriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          findMany: {
            args: Prisma.ViTriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>[]
          }
          create: {
            args: Prisma.ViTriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          createMany: {
            args: Prisma.ViTriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ViTriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          update: {
            args: Prisma.ViTriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          deleteMany: {
            args: Prisma.ViTriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ViTriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ViTriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViTriPayload>
          }
          aggregate: {
            args: Prisma.ViTriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateViTri>
          }
          groupBy: {
            args: Prisma.ViTriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ViTriGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViTriCountArgs<ExtArgs>,
            result: $Utils.Optional<ViTriCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NguoiDungCountOutputType
   */

  export type NguoiDungCountOutputType = {
    BinhLuan: number
    DatPhong: number
  }

  export type NguoiDungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | NguoiDungCountOutputTypeCountBinhLuanArgs
    DatPhong?: boolean | NguoiDungCountOutputTypeCountDatPhongArgs
  }

  // Custom InputTypes

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDungCountOutputType
     */
    select?: NguoiDungCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountBinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
  }


  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountDatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
  }



  /**
   * Count Type PhongCountOutputType
   */

  export type PhongCountOutputType = {
    BinhLuan: number
    DatPhong: number
  }

  export type PhongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | PhongCountOutputTypeCountBinhLuanArgs
    DatPhong?: boolean | PhongCountOutputTypeCountDatPhongArgs
  }

  // Custom InputTypes

  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhongCountOutputType
     */
    select?: PhongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeCountBinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
  }


  /**
   * PhongCountOutputType without action
   */
  export type PhongCountOutputTypeCountDatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
  }



  /**
   * Count Type ViTriCountOutputType
   */

  export type ViTriCountOutputType = {
    Phong: number
  }

  export type ViTriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phong?: boolean | ViTriCountOutputTypeCountPhongArgs
  }

  // Custom InputTypes

  /**
   * ViTriCountOutputType without action
   */
  export type ViTriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTriCountOutputType
     */
    select?: ViTriCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ViTriCountOutputType without action
   */
  export type ViTriCountOutputTypeCountPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhongWhereInput
  }



  /**
   * Models
   */

  /**
   * Model BinhLuan
   */

  export type AggregateBinhLuan = {
    _count: BinhLuanCountAggregateOutputType | null
    _avg: BinhLuanAvgAggregateOutputType | null
    _sum: BinhLuanSumAggregateOutputType | null
    _min: BinhLuanMinAggregateOutputType | null
    _max: BinhLuanMaxAggregateOutputType | null
  }

  export type BinhLuanAvgAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    sao_binh_luan: number | null
  }

  export type BinhLuanSumAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    sao_binh_luan: number | null
  }

  export type BinhLuanMinAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
    sao_binh_luan: number | null
  }

  export type BinhLuanMaxAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ma_nguoi_binh_luan: number | null
    ngay_binh_luan: Date | null
    noi_dung: string | null
    sao_binh_luan: number | null
  }

  export type BinhLuanCountAggregateOutputType = {
    id: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan: number
    noi_dung: number
    sao_binh_luan: number
    _all: number
  }


  export type BinhLuanAvgAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    sao_binh_luan?: true
  }

  export type BinhLuanSumAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    sao_binh_luan?: true
  }

  export type BinhLuanMinAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
  }

  export type BinhLuanMaxAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
  }

  export type BinhLuanCountAggregateInputType = {
    id?: true
    ma_phong?: true
    ma_nguoi_binh_luan?: true
    ngay_binh_luan?: true
    noi_dung?: true
    sao_binh_luan?: true
    _all?: true
  }

  export type BinhLuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinhLuan to aggregate.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinhLuans
    **/
    _count?: true | BinhLuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinhLuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinhLuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinhLuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinhLuanMaxAggregateInputType
  }

  export type GetBinhLuanAggregateType<T extends BinhLuanAggregateArgs> = {
        [P in keyof T & keyof AggregateBinhLuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinhLuan[P]>
      : GetScalarType<T[P], AggregateBinhLuan[P]>
  }




  export type BinhLuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithAggregationInput | BinhLuanOrderByWithAggregationInput[]
    by: BinhLuanScalarFieldEnum[] | BinhLuanScalarFieldEnum
    having?: BinhLuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinhLuanCountAggregateInputType | true
    _avg?: BinhLuanAvgAggregateInputType
    _sum?: BinhLuanSumAggregateInputType
    _min?: BinhLuanMinAggregateInputType
    _max?: BinhLuanMaxAggregateInputType
  }

  export type BinhLuanGroupByOutputType = {
    id: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan: Date | null
    noi_dung: string | null
    sao_binh_luan: number | null
    _count: BinhLuanCountAggregateOutputType | null
    _avg: BinhLuanAvgAggregateOutputType | null
    _sum: BinhLuanSumAggregateOutputType | null
    _min: BinhLuanMinAggregateOutputType | null
    _max: BinhLuanMaxAggregateOutputType | null
  }

  type GetBinhLuanGroupByPayload<T extends BinhLuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinhLuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinhLuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinhLuanGroupByOutputType[P]>
            : GetScalarType<T[P], BinhLuanGroupByOutputType[P]>
        }
      >
    >


  export type BinhLuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ma_phong?: boolean
    ma_nguoi_binh_luan?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
    sao_binh_luan?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["binhLuan"]>

  export type BinhLuanSelectScalar = {
    id?: boolean
    ma_phong?: boolean
    ma_nguoi_binh_luan?: boolean
    ngay_binh_luan?: boolean
    noi_dung?: boolean
    sao_binh_luan?: boolean
  }

  export type BinhLuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }


  export type $BinhLuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BinhLuan"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      Phong: Prisma.$PhongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ma_phong: number
      ma_nguoi_binh_luan: number
      ngay_binh_luan: Date | null
      noi_dung: string | null
      sao_binh_luan: number | null
    }, ExtArgs["result"]["binhLuan"]>
    composites: {}
  }


  type BinhLuanGetPayload<S extends boolean | null | undefined | BinhLuanDefaultArgs> = $Result.GetResult<Prisma.$BinhLuanPayload, S>

  type BinhLuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BinhLuanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BinhLuanCountAggregateInputType | true
    }

  export interface BinhLuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BinhLuan'], meta: { name: 'BinhLuan' } }
    /**
     * Find zero or one BinhLuan that matches the filter.
     * @param {BinhLuanFindUniqueArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BinhLuanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanFindUniqueArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BinhLuan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BinhLuanFindUniqueOrThrowArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BinhLuanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BinhLuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindFirstArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BinhLuanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanFindFirstArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BinhLuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindFirstOrThrowArgs} args - Arguments to find a BinhLuan
     * @example
     * // Get one BinhLuan
     * const binhLuan = await prisma.binhLuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BinhLuanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BinhLuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinhLuans
     * const binhLuans = await prisma.binhLuan.findMany()
     * 
     * // Get first 10 BinhLuans
     * const binhLuans = await prisma.binhLuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binhLuanWithIdOnly = await prisma.binhLuan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BinhLuanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BinhLuan.
     * @param {BinhLuanCreateArgs} args - Arguments to create a BinhLuan.
     * @example
     * // Create one BinhLuan
     * const BinhLuan = await prisma.binhLuan.create({
     *   data: {
     *     // ... data to create a BinhLuan
     *   }
     * })
     * 
    **/
    create<T extends BinhLuanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanCreateArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BinhLuans.
     *     @param {BinhLuanCreateManyArgs} args - Arguments to create many BinhLuans.
     *     @example
     *     // Create many BinhLuans
     *     const binhLuan = await prisma.binhLuan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BinhLuanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinhLuan.
     * @param {BinhLuanDeleteArgs} args - Arguments to delete one BinhLuan.
     * @example
     * // Delete one BinhLuan
     * const BinhLuan = await prisma.binhLuan.delete({
     *   where: {
     *     // ... filter to delete one BinhLuan
     *   }
     * })
     * 
    **/
    delete<T extends BinhLuanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanDeleteArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BinhLuan.
     * @param {BinhLuanUpdateArgs} args - Arguments to update one BinhLuan.
     * @example
     * // Update one BinhLuan
     * const binhLuan = await prisma.binhLuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BinhLuanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanUpdateArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BinhLuans.
     * @param {BinhLuanDeleteManyArgs} args - Arguments to filter BinhLuans to delete.
     * @example
     * // Delete a few BinhLuans
     * const { count } = await prisma.binhLuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BinhLuanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BinhLuanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinhLuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinhLuans
     * const binhLuan = await prisma.binhLuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BinhLuanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinhLuan.
     * @param {BinhLuanUpsertArgs} args - Arguments to update or create a BinhLuan.
     * @example
     * // Update or create a BinhLuan
     * const binhLuan = await prisma.binhLuan.upsert({
     *   create: {
     *     // ... data to create a BinhLuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinhLuan we want to update
     *   }
     * })
    **/
    upsert<T extends BinhLuanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BinhLuanUpsertArgs<ExtArgs>>
    ): Prisma__BinhLuanClient<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BinhLuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanCountArgs} args - Arguments to filter BinhLuans to count.
     * @example
     * // Count the number of BinhLuans
     * const count = await prisma.binhLuan.count({
     *   where: {
     *     // ... the filter for the BinhLuans we want to count
     *   }
     * })
    **/
    count<T extends BinhLuanCountArgs>(
      args?: Subset<T, BinhLuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinhLuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinhLuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinhLuanAggregateArgs>(args: Subset<T, BinhLuanAggregateArgs>): Prisma.PrismaPromise<GetBinhLuanAggregateType<T>>

    /**
     * Group by BinhLuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhLuanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinhLuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinhLuanGroupByArgs['orderBy'] }
        : { orderBy?: BinhLuanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinhLuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinhLuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BinhLuan model
   */
  readonly fields: BinhLuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BinhLuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinhLuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Phong<T extends PhongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhongDefaultArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BinhLuan model
   */ 
  interface BinhLuanFieldRefs {
    readonly id: FieldRef<"BinhLuan", 'Int'>
    readonly ma_phong: FieldRef<"BinhLuan", 'Int'>
    readonly ma_nguoi_binh_luan: FieldRef<"BinhLuan", 'Int'>
    readonly ngay_binh_luan: FieldRef<"BinhLuan", 'DateTime'>
    readonly noi_dung: FieldRef<"BinhLuan", 'String'>
    readonly sao_binh_luan: FieldRef<"BinhLuan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BinhLuan findUnique
   */
  export type BinhLuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where: BinhLuanWhereUniqueInput
  }


  /**
   * BinhLuan findUniqueOrThrow
   */
  export type BinhLuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where: BinhLuanWhereUniqueInput
  }


  /**
   * BinhLuan findFirst
   */
  export type BinhLuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinhLuans.
     */
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }


  /**
   * BinhLuan findFirstOrThrow
   */
  export type BinhLuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuan to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinhLuans.
     */
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }


  /**
   * BinhLuan findMany
   */
  export type BinhLuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter, which BinhLuans to fetch.
     */
    where?: BinhLuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinhLuans to fetch.
     */
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinhLuans.
     */
    cursor?: BinhLuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinhLuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinhLuans.
     */
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }


  /**
   * BinhLuan create
   */
  export type BinhLuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The data needed to create a BinhLuan.
     */
    data: XOR<BinhLuanCreateInput, BinhLuanUncheckedCreateInput>
  }


  /**
   * BinhLuan createMany
   */
  export type BinhLuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BinhLuans.
     */
    data: BinhLuanCreateManyInput | BinhLuanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BinhLuan update
   */
  export type BinhLuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The data needed to update a BinhLuan.
     */
    data: XOR<BinhLuanUpdateInput, BinhLuanUncheckedUpdateInput>
    /**
     * Choose, which BinhLuan to update.
     */
    where: BinhLuanWhereUniqueInput
  }


  /**
   * BinhLuan updateMany
   */
  export type BinhLuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BinhLuans.
     */
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyInput>
    /**
     * Filter which BinhLuans to update
     */
    where?: BinhLuanWhereInput
  }


  /**
   * BinhLuan upsert
   */
  export type BinhLuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * The filter to search for the BinhLuan to update in case it exists.
     */
    where: BinhLuanWhereUniqueInput
    /**
     * In case the BinhLuan found by the `where` argument doesn't exist, create a new BinhLuan with this data.
     */
    create: XOR<BinhLuanCreateInput, BinhLuanUncheckedCreateInput>
    /**
     * In case the BinhLuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinhLuanUpdateInput, BinhLuanUncheckedUpdateInput>
  }


  /**
   * BinhLuan delete
   */
  export type BinhLuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    /**
     * Filter which BinhLuan to delete.
     */
    where: BinhLuanWhereUniqueInput
  }


  /**
   * BinhLuan deleteMany
   */
  export type BinhLuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinhLuans to delete
     */
    where?: BinhLuanWhereInput
  }


  /**
   * BinhLuan without action
   */
  export type BinhLuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
  }



  /**
   * Model DatPhong
   */

  export type AggregateDatPhong = {
    _count: DatPhongCountAggregateOutputType | null
    _avg: DatPhongAvgAggregateOutputType | null
    _sum: DatPhongSumAggregateOutputType | null
    _min: DatPhongMinAggregateOutputType | null
    _max: DatPhongMaxAggregateOutputType | null
  }

  export type DatPhongAvgAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
  }

  export type DatPhongSumAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
  }

  export type DatPhongMinAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ngay_den: Date | null
    ngay_di: Date | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
  }

  export type DatPhongMaxAggregateOutputType = {
    id: number | null
    ma_phong: number | null
    ngay_den: Date | null
    ngay_di: Date | null
    so_luong_khach: number | null
    ma_nguoi_dat: number | null
  }

  export type DatPhongCountAggregateOutputType = {
    id: number
    ma_phong: number
    ngay_den: number
    ngay_di: number
    so_luong_khach: number
    ma_nguoi_dat: number
    _all: number
  }


  export type DatPhongAvgAggregateInputType = {
    id?: true
    ma_phong?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
  }

  export type DatPhongSumAggregateInputType = {
    id?: true
    ma_phong?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
  }

  export type DatPhongMinAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
  }

  export type DatPhongMaxAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
  }

  export type DatPhongCountAggregateInputType = {
    id?: true
    ma_phong?: true
    ngay_den?: true
    ngay_di?: true
    so_luong_khach?: true
    ma_nguoi_dat?: true
    _all?: true
  }

  export type DatPhongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatPhong to aggregate.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatPhongs
    **/
    _count?: true | DatPhongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatPhongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatPhongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatPhongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatPhongMaxAggregateInputType
  }

  export type GetDatPhongAggregateType<T extends DatPhongAggregateArgs> = {
        [P in keyof T & keyof AggregateDatPhong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatPhong[P]>
      : GetScalarType<T[P], AggregateDatPhong[P]>
  }




  export type DatPhongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithAggregationInput | DatPhongOrderByWithAggregationInput[]
    by: DatPhongScalarFieldEnum[] | DatPhongScalarFieldEnum
    having?: DatPhongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatPhongCountAggregateInputType | true
    _avg?: DatPhongAvgAggregateInputType
    _sum?: DatPhongSumAggregateInputType
    _min?: DatPhongMinAggregateInputType
    _max?: DatPhongMaxAggregateInputType
  }

  export type DatPhongGroupByOutputType = {
    id: number
    ma_phong: number
    ngay_den: Date | null
    ngay_di: Date | null
    so_luong_khach: number | null
    ma_nguoi_dat: number
    _count: DatPhongCountAggregateOutputType | null
    _avg: DatPhongAvgAggregateOutputType | null
    _sum: DatPhongSumAggregateOutputType | null
    _min: DatPhongMinAggregateOutputType | null
    _max: DatPhongMaxAggregateOutputType | null
  }

  type GetDatPhongGroupByPayload<T extends DatPhongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatPhongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatPhongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatPhongGroupByOutputType[P]>
            : GetScalarType<T[P], DatPhongGroupByOutputType[P]>
        }
      >
    >


  export type DatPhongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ma_phong?: boolean
    ngay_den?: boolean
    ngay_di?: boolean
    so_luong_khach?: boolean
    ma_nguoi_dat?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datPhong"]>

  export type DatPhongSelectScalar = {
    id?: boolean
    ma_phong?: boolean
    ngay_den?: boolean
    ngay_di?: boolean
    so_luong_khach?: boolean
    ma_nguoi_dat?: boolean
  }

  export type DatPhongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    Phong?: boolean | PhongDefaultArgs<ExtArgs>
  }


  export type $DatPhongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatPhong"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      Phong: Prisma.$PhongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ma_phong: number
      ngay_den: Date | null
      ngay_di: Date | null
      so_luong_khach: number | null
      ma_nguoi_dat: number
    }, ExtArgs["result"]["datPhong"]>
    composites: {}
  }


  type DatPhongGetPayload<S extends boolean | null | undefined | DatPhongDefaultArgs> = $Result.GetResult<Prisma.$DatPhongPayload, S>

  type DatPhongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DatPhongFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DatPhongCountAggregateInputType | true
    }

  export interface DatPhongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatPhong'], meta: { name: 'DatPhong' } }
    /**
     * Find zero or one DatPhong that matches the filter.
     * @param {DatPhongFindUniqueArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatPhongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongFindUniqueArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DatPhong that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DatPhongFindUniqueOrThrowArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatPhongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DatPhong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindFirstArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatPhongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongFindFirstArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DatPhong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindFirstOrThrowArgs} args - Arguments to find a DatPhong
     * @example
     * // Get one DatPhong
     * const datPhong = await prisma.datPhong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatPhongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DatPhongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatPhongs
     * const datPhongs = await prisma.datPhong.findMany()
     * 
     * // Get first 10 DatPhongs
     * const datPhongs = await prisma.datPhong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datPhongWithIdOnly = await prisma.datPhong.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatPhongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DatPhong.
     * @param {DatPhongCreateArgs} args - Arguments to create a DatPhong.
     * @example
     * // Create one DatPhong
     * const DatPhong = await prisma.datPhong.create({
     *   data: {
     *     // ... data to create a DatPhong
     *   }
     * })
     * 
    **/
    create<T extends DatPhongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongCreateArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DatPhongs.
     *     @param {DatPhongCreateManyArgs} args - Arguments to create many DatPhongs.
     *     @example
     *     // Create many DatPhongs
     *     const datPhong = await prisma.datPhong.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatPhongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DatPhong.
     * @param {DatPhongDeleteArgs} args - Arguments to delete one DatPhong.
     * @example
     * // Delete one DatPhong
     * const DatPhong = await prisma.datPhong.delete({
     *   where: {
     *     // ... filter to delete one DatPhong
     *   }
     * })
     * 
    **/
    delete<T extends DatPhongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongDeleteArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DatPhong.
     * @param {DatPhongUpdateArgs} args - Arguments to update one DatPhong.
     * @example
     * // Update one DatPhong
     * const datPhong = await prisma.datPhong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatPhongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongUpdateArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DatPhongs.
     * @param {DatPhongDeleteManyArgs} args - Arguments to filter DatPhongs to delete.
     * @example
     * // Delete a few DatPhongs
     * const { count } = await prisma.datPhong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatPhongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatPhongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatPhongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatPhongs
     * const datPhong = await prisma.datPhong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatPhongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DatPhong.
     * @param {DatPhongUpsertArgs} args - Arguments to update or create a DatPhong.
     * @example
     * // Update or create a DatPhong
     * const datPhong = await prisma.datPhong.upsert({
     *   create: {
     *     // ... data to create a DatPhong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatPhong we want to update
     *   }
     * })
    **/
    upsert<T extends DatPhongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DatPhongUpsertArgs<ExtArgs>>
    ): Prisma__DatPhongClient<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DatPhongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongCountArgs} args - Arguments to filter DatPhongs to count.
     * @example
     * // Count the number of DatPhongs
     * const count = await prisma.datPhong.count({
     *   where: {
     *     // ... the filter for the DatPhongs we want to count
     *   }
     * })
    **/
    count<T extends DatPhongCountArgs>(
      args?: Subset<T, DatPhongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatPhongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatPhong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatPhongAggregateArgs>(args: Subset<T, DatPhongAggregateArgs>): Prisma.PrismaPromise<GetDatPhongAggregateType<T>>

    /**
     * Group by DatPhong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatPhongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatPhongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatPhongGroupByArgs['orderBy'] }
        : { orderBy?: DatPhongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatPhongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatPhongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatPhong model
   */
  readonly fields: DatPhongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatPhong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatPhongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Phong<T extends PhongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhongDefaultArgs<ExtArgs>>): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DatPhong model
   */ 
  interface DatPhongFieldRefs {
    readonly id: FieldRef<"DatPhong", 'Int'>
    readonly ma_phong: FieldRef<"DatPhong", 'Int'>
    readonly ngay_den: FieldRef<"DatPhong", 'DateTime'>
    readonly ngay_di: FieldRef<"DatPhong", 'DateTime'>
    readonly so_luong_khach: FieldRef<"DatPhong", 'Int'>
    readonly ma_nguoi_dat: FieldRef<"DatPhong", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DatPhong findUnique
   */
  export type DatPhongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where: DatPhongWhereUniqueInput
  }


  /**
   * DatPhong findUniqueOrThrow
   */
  export type DatPhongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where: DatPhongWhereUniqueInput
  }


  /**
   * DatPhong findFirst
   */
  export type DatPhongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatPhongs.
     */
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }


  /**
   * DatPhong findFirstOrThrow
   */
  export type DatPhongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhong to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatPhongs.
     */
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }


  /**
   * DatPhong findMany
   */
  export type DatPhongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter, which DatPhongs to fetch.
     */
    where?: DatPhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatPhongs to fetch.
     */
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatPhongs.
     */
    cursor?: DatPhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatPhongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatPhongs.
     */
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }


  /**
   * DatPhong create
   */
  export type DatPhongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The data needed to create a DatPhong.
     */
    data: XOR<DatPhongCreateInput, DatPhongUncheckedCreateInput>
  }


  /**
   * DatPhong createMany
   */
  export type DatPhongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatPhongs.
     */
    data: DatPhongCreateManyInput | DatPhongCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DatPhong update
   */
  export type DatPhongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The data needed to update a DatPhong.
     */
    data: XOR<DatPhongUpdateInput, DatPhongUncheckedUpdateInput>
    /**
     * Choose, which DatPhong to update.
     */
    where: DatPhongWhereUniqueInput
  }


  /**
   * DatPhong updateMany
   */
  export type DatPhongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatPhongs.
     */
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyInput>
    /**
     * Filter which DatPhongs to update
     */
    where?: DatPhongWhereInput
  }


  /**
   * DatPhong upsert
   */
  export type DatPhongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * The filter to search for the DatPhong to update in case it exists.
     */
    where: DatPhongWhereUniqueInput
    /**
     * In case the DatPhong found by the `where` argument doesn't exist, create a new DatPhong with this data.
     */
    create: XOR<DatPhongCreateInput, DatPhongUncheckedCreateInput>
    /**
     * In case the DatPhong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatPhongUpdateInput, DatPhongUncheckedUpdateInput>
  }


  /**
   * DatPhong delete
   */
  export type DatPhongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    /**
     * Filter which DatPhong to delete.
     */
    where: DatPhongWhereUniqueInput
  }


  /**
   * DatPhong deleteMany
   */
  export type DatPhongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatPhongs to delete
     */
    where?: DatPhongWhereInput
  }


  /**
   * DatPhong without action
   */
  export type DatPhongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
  }



  /**
   * Model NguoiDung
   */

  export type AggregateNguoiDung = {
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  export type NguoiDungAvgAggregateOutputType = {
    id: number | null
  }

  export type NguoiDungSumAggregateOutputType = {
    id: number | null
  }

  export type NguoiDungMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    pass_word: string | null
    phone: string | null
    birth_day: string | null
    gender: string | null
    role: string | null
    avatar: string | null
  }

  export type NguoiDungMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    pass_word: string | null
    phone: string | null
    birth_day: string | null
    gender: string | null
    role: string | null
    avatar: string | null
  }

  export type NguoiDungCountAggregateOutputType = {
    id: number
    name: number
    email: number
    pass_word: number
    phone: number
    birth_day: number
    gender: number
    role: number
    avatar: number
    _all: number
  }


  export type NguoiDungAvgAggregateInputType = {
    id?: true
  }

  export type NguoiDungSumAggregateInputType = {
    id?: true
  }

  export type NguoiDungMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass_word?: true
    phone?: true
    birth_day?: true
    gender?: true
    role?: true
    avatar?: true
  }

  export type NguoiDungMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass_word?: true
    phone?: true
    birth_day?: true
    gender?: true
    role?: true
    avatar?: true
  }

  export type NguoiDungCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    pass_word?: true
    phone?: true
    birth_day?: true
    gender?: true
    role?: true
    avatar?: true
    _all?: true
  }

  export type NguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDung to aggregate.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationAndSearchRelevanceInput | NguoiDungOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NguoiDungs
    **/
    _count?: true | NguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NguoiDungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NguoiDungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NguoiDungMaxAggregateInputType
  }

  export type GetNguoiDungAggregateType<T extends NguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoiDung[P]>
      : GetScalarType<T[P], AggregateNguoiDung[P]>
  }




  export type NguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithAggregationInput | NguoiDungOrderByWithAggregationInput[]
    by: NguoiDungScalarFieldEnum[] | NguoiDungScalarFieldEnum
    having?: NguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NguoiDungCountAggregateInputType | true
    _avg?: NguoiDungAvgAggregateInputType
    _sum?: NguoiDungSumAggregateInputType
    _min?: NguoiDungMinAggregateInputType
    _max?: NguoiDungMaxAggregateInputType
  }

  export type NguoiDungGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    pass_word: string | null
    phone: string | null
    birth_day: string | null
    gender: string | null
    role: string | null
    avatar: string | null
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  type GetNguoiDungGroupByPayload<T extends NguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type NguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    pass_word?: boolean
    phone?: boolean
    birth_day?: boolean
    gender?: boolean
    role?: boolean
    avatar?: boolean
    BinhLuan?: boolean | NguoiDung$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | NguoiDung$DatPhongArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoiDung"]>

  export type NguoiDungSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    pass_word?: boolean
    phone?: boolean
    birth_day?: boolean
    gender?: boolean
    role?: boolean
    avatar?: boolean
  }

  export type NguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | NguoiDung$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | NguoiDung$DatPhongArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $NguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NguoiDung"
    objects: {
      BinhLuan: Prisma.$BinhLuanPayload<ExtArgs>[]
      DatPhong: Prisma.$DatPhongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      pass_word: string | null
      phone: string | null
      birth_day: string | null
      gender: string | null
      role: string | null
      avatar: string | null
    }, ExtArgs["result"]["nguoiDung"]>
    composites: {}
  }


  type NguoiDungGetPayload<S extends boolean | null | undefined | NguoiDungDefaultArgs> = $Result.GetResult<Prisma.$NguoiDungPayload, S>

  type NguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NguoiDungFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NguoiDungCountAggregateInputType | true
    }

  export interface NguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NguoiDung'], meta: { name: 'NguoiDung' } }
    /**
     * Find zero or one NguoiDung that matches the filter.
     * @param {NguoiDungFindUniqueArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NguoiDungFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungFindUniqueArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NguoiDung that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NguoiDungFindUniqueOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NguoiDungFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NguoiDungFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungFindFirstArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NguoiDungFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany()
     * 
     * // Get first 10 NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nguoiDungWithIdOnly = await prisma.nguoiDung.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NguoiDungFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NguoiDung.
     * @param {NguoiDungCreateArgs} args - Arguments to create a NguoiDung.
     * @example
     * // Create one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.create({
     *   data: {
     *     // ... data to create a NguoiDung
     *   }
     * })
     * 
    **/
    create<T extends NguoiDungCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungCreateArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NguoiDungs.
     *     @param {NguoiDungCreateManyArgs} args - Arguments to create many NguoiDungs.
     *     @example
     *     // Create many NguoiDungs
     *     const nguoiDung = await prisma.nguoiDung.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NguoiDungCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NguoiDung.
     * @param {NguoiDungDeleteArgs} args - Arguments to delete one NguoiDung.
     * @example
     * // Delete one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.delete({
     *   where: {
     *     // ... filter to delete one NguoiDung
     *   }
     * })
     * 
    **/
    delete<T extends NguoiDungDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungDeleteArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NguoiDung.
     * @param {NguoiDungUpdateArgs} args - Arguments to update one NguoiDung.
     * @example
     * // Update one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NguoiDungUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungUpdateArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NguoiDungs.
     * @param {NguoiDungDeleteManyArgs} args - Arguments to filter NguoiDungs to delete.
     * @example
     * // Delete a few NguoiDungs
     * const { count } = await prisma.nguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NguoiDungDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NguoiDungDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NguoiDungUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NguoiDung.
     * @param {NguoiDungUpsertArgs} args - Arguments to update or create a NguoiDung.
     * @example
     * // Update or create a NguoiDung
     * const nguoiDung = await prisma.nguoiDung.upsert({
     *   create: {
     *     // ... data to create a NguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NguoiDung we want to update
     *   }
     * })
    **/
    upsert<T extends NguoiDungUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NguoiDungUpsertArgs<ExtArgs>>
    ): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungCountArgs} args - Arguments to filter NguoiDungs to count.
     * @example
     * // Count the number of NguoiDungs
     * const count = await prisma.nguoiDung.count({
     *   where: {
     *     // ... the filter for the NguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends NguoiDungCountArgs>(
      args?: Subset<T, NguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NguoiDungAggregateArgs>(args: Subset<T, NguoiDungAggregateArgs>): Prisma.PrismaPromise<GetNguoiDungAggregateType<T>>

    /**
     * Group by NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: NguoiDungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NguoiDung model
   */
  readonly fields: NguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    BinhLuan<T extends NguoiDung$BinhLuanArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$BinhLuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findMany'> | Null>;

    DatPhong<T extends NguoiDung$DatPhongArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$DatPhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NguoiDung model
   */ 
  interface NguoiDungFieldRefs {
    readonly id: FieldRef<"NguoiDung", 'Int'>
    readonly name: FieldRef<"NguoiDung", 'String'>
    readonly email: FieldRef<"NguoiDung", 'String'>
    readonly pass_word: FieldRef<"NguoiDung", 'String'>
    readonly phone: FieldRef<"NguoiDung", 'String'>
    readonly birth_day: FieldRef<"NguoiDung", 'String'>
    readonly gender: FieldRef<"NguoiDung", 'String'>
    readonly role: FieldRef<"NguoiDung", 'String'>
    readonly avatar: FieldRef<"NguoiDung", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NguoiDung findUnique
   */
  export type NguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }


  /**
   * NguoiDung findUniqueOrThrow
   */
  export type NguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }


  /**
   * NguoiDung findFirst
   */
  export type NguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationAndSearchRelevanceInput | NguoiDungOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }


  /**
   * NguoiDung findFirstOrThrow
   */
  export type NguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationAndSearchRelevanceInput | NguoiDungOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }


  /**
   * NguoiDung findMany
   */
  export type NguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDungs to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationAndSearchRelevanceInput | NguoiDungOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }


  /**
   * NguoiDung create
   */
  export type NguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a NguoiDung.
     */
    data?: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
  }


  /**
   * NguoiDung createMany
   */
  export type NguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NguoiDungs.
     */
    data: NguoiDungCreateManyInput | NguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NguoiDung update
   */
  export type NguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a NguoiDung.
     */
    data: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
    /**
     * Choose, which NguoiDung to update.
     */
    where: NguoiDungWhereUniqueInput
  }


  /**
   * NguoiDung updateMany
   */
  export type NguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NguoiDungs.
     */
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which NguoiDungs to update
     */
    where?: NguoiDungWhereInput
  }


  /**
   * NguoiDung upsert
   */
  export type NguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the NguoiDung to update in case it exists.
     */
    where: NguoiDungWhereUniqueInput
    /**
     * In case the NguoiDung found by the `where` argument doesn't exist, create a new NguoiDung with this data.
     */
    create: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
    /**
     * In case the NguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
  }


  /**
   * NguoiDung delete
   */
  export type NguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter which NguoiDung to delete.
     */
    where: NguoiDungWhereUniqueInput
  }


  /**
   * NguoiDung deleteMany
   */
  export type NguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDungs to delete
     */
    where?: NguoiDungWhereInput
  }


  /**
   * NguoiDung.BinhLuan
   */
  export type NguoiDung$BinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: BinhLuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }


  /**
   * NguoiDung.DatPhong
   */
  export type NguoiDung$DatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: DatPhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }


  /**
   * NguoiDung without action
   */
  export type NguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NguoiDungInclude<ExtArgs> | null
  }



  /**
   * Model Phong
   */

  export type AggregatePhong = {
    _count: PhongCountAggregateOutputType | null
    _avg: PhongAvgAggregateOutputType | null
    _sum: PhongSumAggregateOutputType | null
    _min: PhongMinAggregateOutputType | null
    _max: PhongMaxAggregateOutputType | null
  }

  export type PhongAvgAggregateOutputType = {
    id: number | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    gia_tien: number | null
    ma_vi_tri: number | null
  }

  export type PhongSumAggregateOutputType = {
    id: number | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    gia_tien: number | null
    ma_vi_tri: number | null
  }

  export type PhongMinAggregateOutputType = {
    id: number | null
    ten_phong: string | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    mo_ta: string | null
    gia_tien: number | null
    may_giat: boolean | null
    ban_la: boolean | null
    tivi: boolean | null
    dieu_hoa: boolean | null
    wifi: boolean | null
    bep: boolean | null
    do_xe: boolean | null
    ho_boi: boolean | null
    ban_ui: boolean | null
    hinh_anh: string | null
    ma_vi_tri: number | null
  }

  export type PhongMaxAggregateOutputType = {
    id: number | null
    ten_phong: string | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    mo_ta: string | null
    gia_tien: number | null
    may_giat: boolean | null
    ban_la: boolean | null
    tivi: boolean | null
    dieu_hoa: boolean | null
    wifi: boolean | null
    bep: boolean | null
    do_xe: boolean | null
    ho_boi: boolean | null
    ban_ui: boolean | null
    hinh_anh: string | null
    ma_vi_tri: number | null
  }

  export type PhongCountAggregateOutputType = {
    id: number
    ten_phong: number
    khach: number
    phong_ngu: number
    giuong: number
    phong_tam: number
    mo_ta: number
    gia_tien: number
    may_giat: number
    ban_la: number
    tivi: number
    dieu_hoa: number
    wifi: number
    bep: number
    do_xe: number
    ho_boi: number
    ban_ui: number
    hinh_anh: number
    ma_vi_tri: number
    _all: number
  }


  export type PhongAvgAggregateInputType = {
    id?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    gia_tien?: true
    ma_vi_tri?: true
  }

  export type PhongSumAggregateInputType = {
    id?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    gia_tien?: true
    ma_vi_tri?: true
  }

  export type PhongMinAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    hinh_anh?: true
    ma_vi_tri?: true
  }

  export type PhongMaxAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    hinh_anh?: true
    ma_vi_tri?: true
  }

  export type PhongCountAggregateInputType = {
    id?: true
    ten_phong?: true
    khach?: true
    phong_ngu?: true
    giuong?: true
    phong_tam?: true
    mo_ta?: true
    gia_tien?: true
    may_giat?: true
    ban_la?: true
    tivi?: true
    dieu_hoa?: true
    wifi?: true
    bep?: true
    do_xe?: true
    ho_boi?: true
    ban_ui?: true
    hinh_anh?: true
    ma_vi_tri?: true
    _all?: true
  }

  export type PhongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phong to aggregate.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationAndSearchRelevanceInput | PhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phongs
    **/
    _count?: true | PhongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhongMaxAggregateInputType
  }

  export type GetPhongAggregateType<T extends PhongAggregateArgs> = {
        [P in keyof T & keyof AggregatePhong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhong[P]>
      : GetScalarType<T[P], AggregatePhong[P]>
  }




  export type PhongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhongWhereInput
    orderBy?: PhongOrderByWithAggregationInput | PhongOrderByWithAggregationInput[]
    by: PhongScalarFieldEnum[] | PhongScalarFieldEnum
    having?: PhongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhongCountAggregateInputType | true
    _avg?: PhongAvgAggregateInputType
    _sum?: PhongSumAggregateInputType
    _min?: PhongMinAggregateInputType
    _max?: PhongMaxAggregateInputType
  }

  export type PhongGroupByOutputType = {
    id: number
    ten_phong: string | null
    khach: number | null
    phong_ngu: number | null
    giuong: number | null
    phong_tam: number | null
    mo_ta: string | null
    gia_tien: number | null
    may_giat: boolean | null
    ban_la: boolean | null
    tivi: boolean | null
    dieu_hoa: boolean | null
    wifi: boolean | null
    bep: boolean | null
    do_xe: boolean | null
    ho_boi: boolean | null
    ban_ui: boolean | null
    hinh_anh: string | null
    ma_vi_tri: number
    _count: PhongCountAggregateOutputType | null
    _avg: PhongAvgAggregateOutputType | null
    _sum: PhongSumAggregateOutputType | null
    _min: PhongMinAggregateOutputType | null
    _max: PhongMaxAggregateOutputType | null
  }

  type GetPhongGroupByPayload<T extends PhongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhongGroupByOutputType[P]>
            : GetScalarType<T[P], PhongGroupByOutputType[P]>
        }
      >
    >


  export type PhongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ten_phong?: boolean
    khach?: boolean
    phong_ngu?: boolean
    giuong?: boolean
    phong_tam?: boolean
    mo_ta?: boolean
    gia_tien?: boolean
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: boolean
    ma_vi_tri?: boolean
    BinhLuan?: boolean | Phong$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | Phong$DatPhongArgs<ExtArgs>
    ViTri?: boolean | ViTriDefaultArgs<ExtArgs>
    _count?: boolean | PhongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phong"]>

  export type PhongSelectScalar = {
    id?: boolean
    ten_phong?: boolean
    khach?: boolean
    phong_ngu?: boolean
    giuong?: boolean
    phong_tam?: boolean
    mo_ta?: boolean
    gia_tien?: boolean
    may_giat?: boolean
    ban_la?: boolean
    tivi?: boolean
    dieu_hoa?: boolean
    wifi?: boolean
    bep?: boolean
    do_xe?: boolean
    ho_boi?: boolean
    ban_ui?: boolean
    hinh_anh?: boolean
    ma_vi_tri?: boolean
  }

  export type PhongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BinhLuan?: boolean | Phong$BinhLuanArgs<ExtArgs>
    DatPhong?: boolean | Phong$DatPhongArgs<ExtArgs>
    ViTri?: boolean | ViTriDefaultArgs<ExtArgs>
    _count?: boolean | PhongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PhongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phong"
    objects: {
      BinhLuan: Prisma.$BinhLuanPayload<ExtArgs>[]
      DatPhong: Prisma.$DatPhongPayload<ExtArgs>[]
      ViTri: Prisma.$ViTriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ten_phong: string | null
      khach: number | null
      phong_ngu: number | null
      giuong: number | null
      phong_tam: number | null
      mo_ta: string | null
      gia_tien: number | null
      may_giat: boolean | null
      ban_la: boolean | null
      tivi: boolean | null
      dieu_hoa: boolean | null
      wifi: boolean | null
      bep: boolean | null
      do_xe: boolean | null
      ho_boi: boolean | null
      ban_ui: boolean | null
      hinh_anh: string | null
      ma_vi_tri: number
    }, ExtArgs["result"]["phong"]>
    composites: {}
  }


  type PhongGetPayload<S extends boolean | null | undefined | PhongDefaultArgs> = $Result.GetResult<Prisma.$PhongPayload, S>

  type PhongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhongFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PhongCountAggregateInputType | true
    }

  export interface PhongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phong'], meta: { name: 'Phong' } }
    /**
     * Find zero or one Phong that matches the filter.
     * @param {PhongFindUniqueArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhongFindUniqueArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Phong that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhongFindUniqueOrThrowArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Phong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindFirstArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongFindFirstArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Phong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindFirstOrThrowArgs} args - Arguments to find a Phong
     * @example
     * // Get one Phong
     * const phong = await prisma.phong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Phongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phongs
     * const phongs = await prisma.phong.findMany()
     * 
     * // Get first 10 Phongs
     * const phongs = await prisma.phong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phongWithIdOnly = await prisma.phong.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Phong.
     * @param {PhongCreateArgs} args - Arguments to create a Phong.
     * @example
     * // Create one Phong
     * const Phong = await prisma.phong.create({
     *   data: {
     *     // ... data to create a Phong
     *   }
     * })
     * 
    **/
    create<T extends PhongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhongCreateArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Phongs.
     *     @param {PhongCreateManyArgs} args - Arguments to create many Phongs.
     *     @example
     *     // Create many Phongs
     *     const phong = await prisma.phong.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phong.
     * @param {PhongDeleteArgs} args - Arguments to delete one Phong.
     * @example
     * // Delete one Phong
     * const Phong = await prisma.phong.delete({
     *   where: {
     *     // ... filter to delete one Phong
     *   }
     * })
     * 
    **/
    delete<T extends PhongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhongDeleteArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Phong.
     * @param {PhongUpdateArgs} args - Arguments to update one Phong.
     * @example
     * // Update one Phong
     * const phong = await prisma.phong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhongUpdateArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Phongs.
     * @param {PhongDeleteManyArgs} args - Arguments to filter Phongs to delete.
     * @example
     * // Delete a few Phongs
     * const { count } = await prisma.phong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phongs
     * const phong = await prisma.phong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phong.
     * @param {PhongUpsertArgs} args - Arguments to update or create a Phong.
     * @example
     * // Update or create a Phong
     * const phong = await prisma.phong.upsert({
     *   create: {
     *     // ... data to create a Phong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phong we want to update
     *   }
     * })
    **/
    upsert<T extends PhongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhongUpsertArgs<ExtArgs>>
    ): Prisma__PhongClient<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Phongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongCountArgs} args - Arguments to filter Phongs to count.
     * @example
     * // Count the number of Phongs
     * const count = await prisma.phong.count({
     *   where: {
     *     // ... the filter for the Phongs we want to count
     *   }
     * })
    **/
    count<T extends PhongCountArgs>(
      args?: Subset<T, PhongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhongAggregateArgs>(args: Subset<T, PhongAggregateArgs>): Prisma.PrismaPromise<GetPhongAggregateType<T>>

    /**
     * Group by Phong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhongGroupByArgs['orderBy'] }
        : { orderBy?: PhongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phong model
   */
  readonly fields: PhongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    BinhLuan<T extends Phong$BinhLuanArgs<ExtArgs> = {}>(args?: Subset<T, Phong$BinhLuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhLuanPayload<ExtArgs>, T, 'findMany'> | Null>;

    DatPhong<T extends Phong$DatPhongArgs<ExtArgs> = {}>(args?: Subset<T, Phong$DatPhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatPhongPayload<ExtArgs>, T, 'findMany'> | Null>;

    ViTri<T extends ViTriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViTriDefaultArgs<ExtArgs>>): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Phong model
   */ 
  interface PhongFieldRefs {
    readonly id: FieldRef<"Phong", 'Int'>
    readonly ten_phong: FieldRef<"Phong", 'String'>
    readonly khach: FieldRef<"Phong", 'Int'>
    readonly phong_ngu: FieldRef<"Phong", 'Int'>
    readonly giuong: FieldRef<"Phong", 'Int'>
    readonly phong_tam: FieldRef<"Phong", 'Int'>
    readonly mo_ta: FieldRef<"Phong", 'String'>
    readonly gia_tien: FieldRef<"Phong", 'Int'>
    readonly may_giat: FieldRef<"Phong", 'Boolean'>
    readonly ban_la: FieldRef<"Phong", 'Boolean'>
    readonly tivi: FieldRef<"Phong", 'Boolean'>
    readonly dieu_hoa: FieldRef<"Phong", 'Boolean'>
    readonly wifi: FieldRef<"Phong", 'Boolean'>
    readonly bep: FieldRef<"Phong", 'Boolean'>
    readonly do_xe: FieldRef<"Phong", 'Boolean'>
    readonly ho_boi: FieldRef<"Phong", 'Boolean'>
    readonly ban_ui: FieldRef<"Phong", 'Boolean'>
    readonly hinh_anh: FieldRef<"Phong", 'String'>
    readonly ma_vi_tri: FieldRef<"Phong", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Phong findUnique
   */
  export type PhongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where: PhongWhereUniqueInput
  }


  /**
   * Phong findUniqueOrThrow
   */
  export type PhongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where: PhongWhereUniqueInput
  }


  /**
   * Phong findFirst
   */
  export type PhongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationAndSearchRelevanceInput | PhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phongs.
     */
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }


  /**
   * Phong findFirstOrThrow
   */
  export type PhongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phong to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationAndSearchRelevanceInput | PhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phongs.
     */
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }


  /**
   * Phong findMany
   */
  export type PhongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter, which Phongs to fetch.
     */
    where?: PhongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phongs to fetch.
     */
    orderBy?: PhongOrderByWithRelationAndSearchRelevanceInput | PhongOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phongs.
     */
    cursor?: PhongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phongs.
     */
    skip?: number
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }


  /**
   * Phong create
   */
  export type PhongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The data needed to create a Phong.
     */
    data: XOR<PhongCreateInput, PhongUncheckedCreateInput>
  }


  /**
   * Phong createMany
   */
  export type PhongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phongs.
     */
    data: PhongCreateManyInput | PhongCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Phong update
   */
  export type PhongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The data needed to update a Phong.
     */
    data: XOR<PhongUpdateInput, PhongUncheckedUpdateInput>
    /**
     * Choose, which Phong to update.
     */
    where: PhongWhereUniqueInput
  }


  /**
   * Phong updateMany
   */
  export type PhongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phongs.
     */
    data: XOR<PhongUpdateManyMutationInput, PhongUncheckedUpdateManyInput>
    /**
     * Filter which Phongs to update
     */
    where?: PhongWhereInput
  }


  /**
   * Phong upsert
   */
  export type PhongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * The filter to search for the Phong to update in case it exists.
     */
    where: PhongWhereUniqueInput
    /**
     * In case the Phong found by the `where` argument doesn't exist, create a new Phong with this data.
     */
    create: XOR<PhongCreateInput, PhongUncheckedCreateInput>
    /**
     * In case the Phong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhongUpdateInput, PhongUncheckedUpdateInput>
  }


  /**
   * Phong delete
   */
  export type PhongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    /**
     * Filter which Phong to delete.
     */
    where: PhongWhereUniqueInput
  }


  /**
   * Phong deleteMany
   */
  export type PhongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phongs to delete
     */
    where?: PhongWhereInput
  }


  /**
   * Phong.BinhLuan
   */
  export type Phong$BinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhLuan
     */
    select?: BinhLuanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinhLuanInclude<ExtArgs> | null
    where?: BinhLuanWhereInput
    orderBy?: BinhLuanOrderByWithRelationAndSearchRelevanceInput | BinhLuanOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: BinhLuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhLuanScalarFieldEnum | BinhLuanScalarFieldEnum[]
  }


  /**
   * Phong.DatPhong
   */
  export type Phong$DatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatPhong
     */
    select?: DatPhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatPhongInclude<ExtArgs> | null
    where?: DatPhongWhereInput
    orderBy?: DatPhongOrderByWithRelationAndSearchRelevanceInput | DatPhongOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: DatPhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatPhongScalarFieldEnum | DatPhongScalarFieldEnum[]
  }


  /**
   * Phong without action
   */
  export type PhongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
  }



  /**
   * Model ViTri
   */

  export type AggregateViTri = {
    _count: ViTriCountAggregateOutputType | null
    _avg: ViTriAvgAggregateOutputType | null
    _sum: ViTriSumAggregateOutputType | null
    _min: ViTriMinAggregateOutputType | null
    _max: ViTriMaxAggregateOutputType | null
  }

  export type ViTriAvgAggregateOutputType = {
    id: number | null
  }

  export type ViTriSumAggregateOutputType = {
    id: number | null
  }

  export type ViTriMinAggregateOutputType = {
    id: number | null
    ten_vi_tri: string | null
    tinh_thanh: string | null
    quoc_gia: string | null
    hinh_anh: string | null
  }

  export type ViTriMaxAggregateOutputType = {
    id: number | null
    ten_vi_tri: string | null
    tinh_thanh: string | null
    quoc_gia: string | null
    hinh_anh: string | null
  }

  export type ViTriCountAggregateOutputType = {
    id: number
    ten_vi_tri: number
    tinh_thanh: number
    quoc_gia: number
    hinh_anh: number
    _all: number
  }


  export type ViTriAvgAggregateInputType = {
    id?: true
  }

  export type ViTriSumAggregateInputType = {
    id?: true
  }

  export type ViTriMinAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
  }

  export type ViTriMaxAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
  }

  export type ViTriCountAggregateInputType = {
    id?: true
    ten_vi_tri?: true
    tinh_thanh?: true
    quoc_gia?: true
    hinh_anh?: true
    _all?: true
  }

  export type ViTriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViTri to aggregate.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationAndSearchRelevanceInput | ViTriOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViTris
    **/
    _count?: true | ViTriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViTriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViTriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViTriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViTriMaxAggregateInputType
  }

  export type GetViTriAggregateType<T extends ViTriAggregateArgs> = {
        [P in keyof T & keyof AggregateViTri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViTri[P]>
      : GetScalarType<T[P], AggregateViTri[P]>
  }




  export type ViTriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViTriWhereInput
    orderBy?: ViTriOrderByWithAggregationInput | ViTriOrderByWithAggregationInput[]
    by: ViTriScalarFieldEnum[] | ViTriScalarFieldEnum
    having?: ViTriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViTriCountAggregateInputType | true
    _avg?: ViTriAvgAggregateInputType
    _sum?: ViTriSumAggregateInputType
    _min?: ViTriMinAggregateInputType
    _max?: ViTriMaxAggregateInputType
  }

  export type ViTriGroupByOutputType = {
    id: number
    ten_vi_tri: string | null
    tinh_thanh: string | null
    quoc_gia: string | null
    hinh_anh: string | null
    _count: ViTriCountAggregateOutputType | null
    _avg: ViTriAvgAggregateOutputType | null
    _sum: ViTriSumAggregateOutputType | null
    _min: ViTriMinAggregateOutputType | null
    _max: ViTriMaxAggregateOutputType | null
  }

  type GetViTriGroupByPayload<T extends ViTriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViTriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViTriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViTriGroupByOutputType[P]>
            : GetScalarType<T[P], ViTriGroupByOutputType[P]>
        }
      >
    >


  export type ViTriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ten_vi_tri?: boolean
    tinh_thanh?: boolean
    quoc_gia?: boolean
    hinh_anh?: boolean
    Phong?: boolean | ViTri$PhongArgs<ExtArgs>
    _count?: boolean | ViTriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viTri"]>

  export type ViTriSelectScalar = {
    id?: boolean
    ten_vi_tri?: boolean
    tinh_thanh?: boolean
    quoc_gia?: boolean
    hinh_anh?: boolean
  }

  export type ViTriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phong?: boolean | ViTri$PhongArgs<ExtArgs>
    _count?: boolean | ViTriCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ViTriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViTri"
    objects: {
      Phong: Prisma.$PhongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ten_vi_tri: string | null
      tinh_thanh: string | null
      quoc_gia: string | null
      hinh_anh: string | null
    }, ExtArgs["result"]["viTri"]>
    composites: {}
  }


  type ViTriGetPayload<S extends boolean | null | undefined | ViTriDefaultArgs> = $Result.GetResult<Prisma.$ViTriPayload, S>

  type ViTriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViTriFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ViTriCountAggregateInputType | true
    }

  export interface ViTriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViTri'], meta: { name: 'ViTri' } }
    /**
     * Find zero or one ViTri that matches the filter.
     * @param {ViTriFindUniqueArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ViTriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriFindUniqueArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ViTri that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ViTriFindUniqueOrThrowArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ViTriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ViTri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindFirstArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ViTriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriFindFirstArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ViTri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindFirstOrThrowArgs} args - Arguments to find a ViTri
     * @example
     * // Get one ViTri
     * const viTri = await prisma.viTri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ViTriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ViTris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViTris
     * const viTris = await prisma.viTri.findMany()
     * 
     * // Get first 10 ViTris
     * const viTris = await prisma.viTri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viTriWithIdOnly = await prisma.viTri.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ViTriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ViTri.
     * @param {ViTriCreateArgs} args - Arguments to create a ViTri.
     * @example
     * // Create one ViTri
     * const ViTri = await prisma.viTri.create({
     *   data: {
     *     // ... data to create a ViTri
     *   }
     * })
     * 
    **/
    create<T extends ViTriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriCreateArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ViTris.
     *     @param {ViTriCreateManyArgs} args - Arguments to create many ViTris.
     *     @example
     *     // Create many ViTris
     *     const viTri = await prisma.viTri.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ViTriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViTri.
     * @param {ViTriDeleteArgs} args - Arguments to delete one ViTri.
     * @example
     * // Delete one ViTri
     * const ViTri = await prisma.viTri.delete({
     *   where: {
     *     // ... filter to delete one ViTri
     *   }
     * })
     * 
    **/
    delete<T extends ViTriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriDeleteArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ViTri.
     * @param {ViTriUpdateArgs} args - Arguments to update one ViTri.
     * @example
     * // Update one ViTri
     * const viTri = await prisma.viTri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ViTriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriUpdateArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ViTris.
     * @param {ViTriDeleteManyArgs} args - Arguments to filter ViTris to delete.
     * @example
     * // Delete a few ViTris
     * const { count } = await prisma.viTri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ViTriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViTriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViTris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViTris
     * const viTri = await prisma.viTri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ViTriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViTri.
     * @param {ViTriUpsertArgs} args - Arguments to update or create a ViTri.
     * @example
     * // Update or create a ViTri
     * const viTri = await prisma.viTri.upsert({
     *   create: {
     *     // ... data to create a ViTri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViTri we want to update
     *   }
     * })
    **/
    upsert<T extends ViTriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ViTriUpsertArgs<ExtArgs>>
    ): Prisma__ViTriClient<$Result.GetResult<Prisma.$ViTriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ViTris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriCountArgs} args - Arguments to filter ViTris to count.
     * @example
     * // Count the number of ViTris
     * const count = await prisma.viTri.count({
     *   where: {
     *     // ... the filter for the ViTris we want to count
     *   }
     * })
    **/
    count<T extends ViTriCountArgs>(
      args?: Subset<T, ViTriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViTriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViTri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViTriAggregateArgs>(args: Subset<T, ViTriAggregateArgs>): Prisma.PrismaPromise<GetViTriAggregateType<T>>

    /**
     * Group by ViTri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViTriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViTriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViTriGroupByArgs['orderBy'] }
        : { orderBy?: ViTriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViTriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViTriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViTri model
   */
  readonly fields: ViTriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViTri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViTriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Phong<T extends ViTri$PhongArgs<ExtArgs> = {}>(args?: Subset<T, ViTri$PhongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhongPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ViTri model
   */ 
  interface ViTriFieldRefs {
    readonly id: FieldRef<"ViTri", 'Int'>
    readonly ten_vi_tri: FieldRef<"ViTri", 'String'>
    readonly tinh_thanh: FieldRef<"ViTri", 'String'>
    readonly quoc_gia: FieldRef<"ViTri", 'String'>
    readonly hinh_anh: FieldRef<"ViTri", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ViTri findUnique
   */
  export type ViTriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where: ViTriWhereUniqueInput
  }


  /**
   * ViTri findUniqueOrThrow
   */
  export type ViTriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where: ViTriWhereUniqueInput
  }


  /**
   * ViTri findFirst
   */
  export type ViTriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationAndSearchRelevanceInput | ViTriOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViTris.
     */
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }


  /**
   * ViTri findFirstOrThrow
   */
  export type ViTriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTri to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationAndSearchRelevanceInput | ViTriOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViTris.
     */
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }


  /**
   * ViTri findMany
   */
  export type ViTriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter, which ViTris to fetch.
     */
    where?: ViTriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViTris to fetch.
     */
    orderBy?: ViTriOrderByWithRelationAndSearchRelevanceInput | ViTriOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViTris.
     */
    cursor?: ViTriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViTris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViTris.
     */
    skip?: number
    distinct?: ViTriScalarFieldEnum | ViTriScalarFieldEnum[]
  }


  /**
   * ViTri create
   */
  export type ViTriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The data needed to create a ViTri.
     */
    data?: XOR<ViTriCreateInput, ViTriUncheckedCreateInput>
  }


  /**
   * ViTri createMany
   */
  export type ViTriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViTris.
     */
    data: ViTriCreateManyInput | ViTriCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ViTri update
   */
  export type ViTriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The data needed to update a ViTri.
     */
    data: XOR<ViTriUpdateInput, ViTriUncheckedUpdateInput>
    /**
     * Choose, which ViTri to update.
     */
    where: ViTriWhereUniqueInput
  }


  /**
   * ViTri updateMany
   */
  export type ViTriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViTris.
     */
    data: XOR<ViTriUpdateManyMutationInput, ViTriUncheckedUpdateManyInput>
    /**
     * Filter which ViTris to update
     */
    where?: ViTriWhereInput
  }


  /**
   * ViTri upsert
   */
  export type ViTriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * The filter to search for the ViTri to update in case it exists.
     */
    where: ViTriWhereUniqueInput
    /**
     * In case the ViTri found by the `where` argument doesn't exist, create a new ViTri with this data.
     */
    create: XOR<ViTriCreateInput, ViTriUncheckedCreateInput>
    /**
     * In case the ViTri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViTriUpdateInput, ViTriUncheckedUpdateInput>
  }


  /**
   * ViTri delete
   */
  export type ViTriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
    /**
     * Filter which ViTri to delete.
     */
    where: ViTriWhereUniqueInput
  }


  /**
   * ViTri deleteMany
   */
  export type ViTriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViTris to delete
     */
    where?: ViTriWhereInput
  }


  /**
   * ViTri.Phong
   */
  export type ViTri$PhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phong
     */
    select?: PhongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhongInclude<ExtArgs> | null
    where?: PhongWhereInput
    orderBy?: PhongOrderByWithRelationAndSearchRelevanceInput | PhongOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PhongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhongScalarFieldEnum | PhongScalarFieldEnum[]
  }


  /**
   * ViTri without action
   */
  export type ViTriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViTri
     */
    select?: ViTriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViTriInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BinhLuanScalarFieldEnum: {
    id: 'id',
    ma_phong: 'ma_phong',
    ma_nguoi_binh_luan: 'ma_nguoi_binh_luan',
    ngay_binh_luan: 'ngay_binh_luan',
    noi_dung: 'noi_dung',
    sao_binh_luan: 'sao_binh_luan'
  };

  export type BinhLuanScalarFieldEnum = (typeof BinhLuanScalarFieldEnum)[keyof typeof BinhLuanScalarFieldEnum]


  export const DatPhongScalarFieldEnum: {
    id: 'id',
    ma_phong: 'ma_phong',
    ngay_den: 'ngay_den',
    ngay_di: 'ngay_di',
    so_luong_khach: 'so_luong_khach',
    ma_nguoi_dat: 'ma_nguoi_dat'
  };

  export type DatPhongScalarFieldEnum = (typeof DatPhongScalarFieldEnum)[keyof typeof DatPhongScalarFieldEnum]


  export const NguoiDungScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    pass_word: 'pass_word',
    phone: 'phone',
    birth_day: 'birth_day',
    gender: 'gender',
    role: 'role',
    avatar: 'avatar'
  };

  export type NguoiDungScalarFieldEnum = (typeof NguoiDungScalarFieldEnum)[keyof typeof NguoiDungScalarFieldEnum]


  export const PhongScalarFieldEnum: {
    id: 'id',
    ten_phong: 'ten_phong',
    khach: 'khach',
    phong_ngu: 'phong_ngu',
    giuong: 'giuong',
    phong_tam: 'phong_tam',
    mo_ta: 'mo_ta',
    gia_tien: 'gia_tien',
    may_giat: 'may_giat',
    ban_la: 'ban_la',
    tivi: 'tivi',
    dieu_hoa: 'dieu_hoa',
    wifi: 'wifi',
    bep: 'bep',
    do_xe: 'do_xe',
    ho_boi: 'ho_boi',
    ban_ui: 'ban_ui',
    hinh_anh: 'hinh_anh',
    ma_vi_tri: 'ma_vi_tri'
  };

  export type PhongScalarFieldEnum = (typeof PhongScalarFieldEnum)[keyof typeof PhongScalarFieldEnum]


  export const ViTriScalarFieldEnum: {
    id: 'id',
    ten_vi_tri: 'ten_vi_tri',
    tinh_thanh: 'tinh_thanh',
    quoc_gia: 'quoc_gia',
    hinh_anh: 'hinh_anh'
  };

  export type ViTriScalarFieldEnum = (typeof ViTriScalarFieldEnum)[keyof typeof ViTriScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BinhLuanOrderByRelevanceFieldEnum: {
    noi_dung: 'noi_dung'
  };

  export type BinhLuanOrderByRelevanceFieldEnum = (typeof BinhLuanOrderByRelevanceFieldEnum)[keyof typeof BinhLuanOrderByRelevanceFieldEnum]


  export const NguoiDungOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    pass_word: 'pass_word',
    phone: 'phone',
    birth_day: 'birth_day',
    gender: 'gender',
    role: 'role',
    avatar: 'avatar'
  };

  export type NguoiDungOrderByRelevanceFieldEnum = (typeof NguoiDungOrderByRelevanceFieldEnum)[keyof typeof NguoiDungOrderByRelevanceFieldEnum]


  export const PhongOrderByRelevanceFieldEnum: {
    ten_phong: 'ten_phong',
    mo_ta: 'mo_ta',
    hinh_anh: 'hinh_anh'
  };

  export type PhongOrderByRelevanceFieldEnum = (typeof PhongOrderByRelevanceFieldEnum)[keyof typeof PhongOrderByRelevanceFieldEnum]


  export const ViTriOrderByRelevanceFieldEnum: {
    ten_vi_tri: 'ten_vi_tri',
    tinh_thanh: 'tinh_thanh',
    quoc_gia: 'quoc_gia',
    hinh_anh: 'hinh_anh'
  };

  export type ViTriOrderByRelevanceFieldEnum = (typeof ViTriOrderByRelevanceFieldEnum)[keyof typeof ViTriOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BinhLuanWhereInput = {
    AND?: BinhLuanWhereInput | BinhLuanWhereInput[]
    OR?: BinhLuanWhereInput[]
    NOT?: BinhLuanWhereInput | BinhLuanWhereInput[]
    id?: IntFilter<"BinhLuan"> | number
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    noi_dung?: StringNullableFilter<"BinhLuan"> | string | null
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
    NguoiDung?: XOR<NguoiDungRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongRelationFilter, PhongWhereInput>
  }

  export type BinhLuanOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    sao_binh_luan?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationAndSearchRelevanceInput
    Phong?: PhongOrderByWithRelationAndSearchRelevanceInput
    _relevance?: BinhLuanOrderByRelevanceInput
  }

  export type BinhLuanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BinhLuanWhereInput | BinhLuanWhereInput[]
    OR?: BinhLuanWhereInput[]
    NOT?: BinhLuanWhereInput | BinhLuanWhereInput[]
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    noi_dung?: StringNullableFilter<"BinhLuan"> | string | null
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
    NguoiDung?: XOR<NguoiDungRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongRelationFilter, PhongWhereInput>
  }, "id">

  export type BinhLuanOrderByWithAggregationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    sao_binh_luan?: SortOrderInput | SortOrder
    _count?: BinhLuanCountOrderByAggregateInput
    _avg?: BinhLuanAvgOrderByAggregateInput
    _max?: BinhLuanMaxOrderByAggregateInput
    _min?: BinhLuanMinOrderByAggregateInput
    _sum?: BinhLuanSumOrderByAggregateInput
  }

  export type BinhLuanScalarWhereWithAggregatesInput = {
    AND?: BinhLuanScalarWhereWithAggregatesInput | BinhLuanScalarWhereWithAggregatesInput[]
    OR?: BinhLuanScalarWhereWithAggregatesInput[]
    NOT?: BinhLuanScalarWhereWithAggregatesInput | BinhLuanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BinhLuan"> | number
    ma_phong?: IntWithAggregatesFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntWithAggregatesFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeNullableWithAggregatesFilter<"BinhLuan"> | Date | string | null
    noi_dung?: StringNullableWithAggregatesFilter<"BinhLuan"> | string | null
    sao_binh_luan?: IntNullableWithAggregatesFilter<"BinhLuan"> | number | null
  }

  export type DatPhongWhereInput = {
    AND?: DatPhongWhereInput | DatPhongWhereInput[]
    OR?: DatPhongWhereInput[]
    NOT?: DatPhongWhereInput | DatPhongWhereInput[]
    id?: IntFilter<"DatPhong"> | number
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    ngay_di?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    so_luong_khach?: IntNullableFilter<"DatPhong"> | number | null
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
    NguoiDung?: XOR<NguoiDungRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongRelationFilter, PhongWhereInput>
  }

  export type DatPhongOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrderInput | SortOrder
    ngay_di?: SortOrderInput | SortOrder
    so_luong_khach?: SortOrderInput | SortOrder
    ma_nguoi_dat?: SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationAndSearchRelevanceInput
    Phong?: PhongOrderByWithRelationAndSearchRelevanceInput
  }

  export type DatPhongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatPhongWhereInput | DatPhongWhereInput[]
    OR?: DatPhongWhereInput[]
    NOT?: DatPhongWhereInput | DatPhongWhereInput[]
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    ngay_di?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    so_luong_khach?: IntNullableFilter<"DatPhong"> | number | null
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
    NguoiDung?: XOR<NguoiDungRelationFilter, NguoiDungWhereInput>
    Phong?: XOR<PhongRelationFilter, PhongWhereInput>
  }, "id">

  export type DatPhongOrderByWithAggregationInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrderInput | SortOrder
    ngay_di?: SortOrderInput | SortOrder
    so_luong_khach?: SortOrderInput | SortOrder
    ma_nguoi_dat?: SortOrder
    _count?: DatPhongCountOrderByAggregateInput
    _avg?: DatPhongAvgOrderByAggregateInput
    _max?: DatPhongMaxOrderByAggregateInput
    _min?: DatPhongMinOrderByAggregateInput
    _sum?: DatPhongSumOrderByAggregateInput
  }

  export type DatPhongScalarWhereWithAggregatesInput = {
    AND?: DatPhongScalarWhereWithAggregatesInput | DatPhongScalarWhereWithAggregatesInput[]
    OR?: DatPhongScalarWhereWithAggregatesInput[]
    NOT?: DatPhongScalarWhereWithAggregatesInput | DatPhongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DatPhong"> | number
    ma_phong?: IntWithAggregatesFilter<"DatPhong"> | number
    ngay_den?: DateTimeNullableWithAggregatesFilter<"DatPhong"> | Date | string | null
    ngay_di?: DateTimeNullableWithAggregatesFilter<"DatPhong"> | Date | string | null
    so_luong_khach?: IntNullableWithAggregatesFilter<"DatPhong"> | number | null
    ma_nguoi_dat?: IntWithAggregatesFilter<"DatPhong"> | number
  }

  export type NguoiDungWhereInput = {
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    id?: IntFilter<"NguoiDung"> | number
    name?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    pass_word?: StringNullableFilter<"NguoiDung"> | string | null
    phone?: StringNullableFilter<"NguoiDung"> | string | null
    birth_day?: StringNullableFilter<"NguoiDung"> | string | null
    gender?: StringNullableFilter<"NguoiDung"> | string | null
    role?: StringNullableFilter<"NguoiDung"> | string | null
    avatar?: StringNullableFilter<"NguoiDung"> | string | null
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
  }

  export type NguoiDungOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    pass_word?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birth_day?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    BinhLuan?: BinhLuanOrderByRelationAggregateInput
    DatPhong?: DatPhongOrderByRelationAggregateInput
    _relevance?: NguoiDungOrderByRelevanceInput
  }

  export type NguoiDungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    name?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    pass_word?: StringNullableFilter<"NguoiDung"> | string | null
    phone?: StringNullableFilter<"NguoiDung"> | string | null
    birth_day?: StringNullableFilter<"NguoiDung"> | string | null
    gender?: StringNullableFilter<"NguoiDung"> | string | null
    role?: StringNullableFilter<"NguoiDung"> | string | null
    avatar?: StringNullableFilter<"NguoiDung"> | string | null
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
  }, "id">

  export type NguoiDungOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    pass_word?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birth_day?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: NguoiDungCountOrderByAggregateInput
    _avg?: NguoiDungAvgOrderByAggregateInput
    _max?: NguoiDungMaxOrderByAggregateInput
    _min?: NguoiDungMinOrderByAggregateInput
    _sum?: NguoiDungSumOrderByAggregateInput
  }

  export type NguoiDungScalarWhereWithAggregatesInput = {
    AND?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    OR?: NguoiDungScalarWhereWithAggregatesInput[]
    NOT?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NguoiDung"> | number
    name?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    email?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    pass_word?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    phone?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    birth_day?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    gender?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    role?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
  }

  export type PhongWhereInput = {
    AND?: PhongWhereInput | PhongWhereInput[]
    OR?: PhongWhereInput[]
    NOT?: PhongWhereInput | PhongWhereInput[]
    id?: IntFilter<"Phong"> | number
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntNullableFilter<"Phong"> | number | null
    phong_ngu?: IntNullableFilter<"Phong"> | number | null
    giuong?: IntNullableFilter<"Phong"> | number | null
    phong_tam?: IntNullableFilter<"Phong"> | number | null
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntNullableFilter<"Phong"> | number | null
    may_giat?: BoolNullableFilter<"Phong"> | boolean | null
    ban_la?: BoolNullableFilter<"Phong"> | boolean | null
    tivi?: BoolNullableFilter<"Phong"> | boolean | null
    dieu_hoa?: BoolNullableFilter<"Phong"> | boolean | null
    wifi?: BoolNullableFilter<"Phong"> | boolean | null
    bep?: BoolNullableFilter<"Phong"> | boolean | null
    do_xe?: BoolNullableFilter<"Phong"> | boolean | null
    ho_boi?: BoolNullableFilter<"Phong"> | boolean | null
    ban_ui?: BoolNullableFilter<"Phong"> | boolean | null
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    ma_vi_tri?: IntFilter<"Phong"> | number
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    ViTri?: XOR<ViTriRelationFilter, ViTriWhereInput>
  }

  export type PhongOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    ten_phong?: SortOrderInput | SortOrder
    khach?: SortOrderInput | SortOrder
    phong_ngu?: SortOrderInput | SortOrder
    giuong?: SortOrderInput | SortOrder
    phong_tam?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia_tien?: SortOrderInput | SortOrder
    may_giat?: SortOrderInput | SortOrder
    ban_la?: SortOrderInput | SortOrder
    tivi?: SortOrderInput | SortOrder
    dieu_hoa?: SortOrderInput | SortOrder
    wifi?: SortOrderInput | SortOrder
    bep?: SortOrderInput | SortOrder
    do_xe?: SortOrderInput | SortOrder
    ho_boi?: SortOrderInput | SortOrder
    ban_ui?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    ma_vi_tri?: SortOrder
    BinhLuan?: BinhLuanOrderByRelationAggregateInput
    DatPhong?: DatPhongOrderByRelationAggregateInput
    ViTri?: ViTriOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PhongOrderByRelevanceInput
  }

  export type PhongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhongWhereInput | PhongWhereInput[]
    OR?: PhongWhereInput[]
    NOT?: PhongWhereInput | PhongWhereInput[]
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntNullableFilter<"Phong"> | number | null
    phong_ngu?: IntNullableFilter<"Phong"> | number | null
    giuong?: IntNullableFilter<"Phong"> | number | null
    phong_tam?: IntNullableFilter<"Phong"> | number | null
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntNullableFilter<"Phong"> | number | null
    may_giat?: BoolNullableFilter<"Phong"> | boolean | null
    ban_la?: BoolNullableFilter<"Phong"> | boolean | null
    tivi?: BoolNullableFilter<"Phong"> | boolean | null
    dieu_hoa?: BoolNullableFilter<"Phong"> | boolean | null
    wifi?: BoolNullableFilter<"Phong"> | boolean | null
    bep?: BoolNullableFilter<"Phong"> | boolean | null
    do_xe?: BoolNullableFilter<"Phong"> | boolean | null
    ho_boi?: BoolNullableFilter<"Phong"> | boolean | null
    ban_ui?: BoolNullableFilter<"Phong"> | boolean | null
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    ma_vi_tri?: IntFilter<"Phong"> | number
    BinhLuan?: BinhLuanListRelationFilter
    DatPhong?: DatPhongListRelationFilter
    ViTri?: XOR<ViTriRelationFilter, ViTriWhereInput>
  }, "id">

  export type PhongOrderByWithAggregationInput = {
    id?: SortOrder
    ten_phong?: SortOrderInput | SortOrder
    khach?: SortOrderInput | SortOrder
    phong_ngu?: SortOrderInput | SortOrder
    giuong?: SortOrderInput | SortOrder
    phong_tam?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia_tien?: SortOrderInput | SortOrder
    may_giat?: SortOrderInput | SortOrder
    ban_la?: SortOrderInput | SortOrder
    tivi?: SortOrderInput | SortOrder
    dieu_hoa?: SortOrderInput | SortOrder
    wifi?: SortOrderInput | SortOrder
    bep?: SortOrderInput | SortOrder
    do_xe?: SortOrderInput | SortOrder
    ho_boi?: SortOrderInput | SortOrder
    ban_ui?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    ma_vi_tri?: SortOrder
    _count?: PhongCountOrderByAggregateInput
    _avg?: PhongAvgOrderByAggregateInput
    _max?: PhongMaxOrderByAggregateInput
    _min?: PhongMinOrderByAggregateInput
    _sum?: PhongSumOrderByAggregateInput
  }

  export type PhongScalarWhereWithAggregatesInput = {
    AND?: PhongScalarWhereWithAggregatesInput | PhongScalarWhereWithAggregatesInput[]
    OR?: PhongScalarWhereWithAggregatesInput[]
    NOT?: PhongScalarWhereWithAggregatesInput | PhongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Phong"> | number
    ten_phong?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    khach?: IntNullableWithAggregatesFilter<"Phong"> | number | null
    phong_ngu?: IntNullableWithAggregatesFilter<"Phong"> | number | null
    giuong?: IntNullableWithAggregatesFilter<"Phong"> | number | null
    phong_tam?: IntNullableWithAggregatesFilter<"Phong"> | number | null
    mo_ta?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    gia_tien?: IntNullableWithAggregatesFilter<"Phong"> | number | null
    may_giat?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    ban_la?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    tivi?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    dieu_hoa?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    wifi?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    bep?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    do_xe?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    ho_boi?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    ban_ui?: BoolNullableWithAggregatesFilter<"Phong"> | boolean | null
    hinh_anh?: StringNullableWithAggregatesFilter<"Phong"> | string | null
    ma_vi_tri?: IntWithAggregatesFilter<"Phong"> | number
  }

  export type ViTriWhereInput = {
    AND?: ViTriWhereInput | ViTriWhereInput[]
    OR?: ViTriWhereInput[]
    NOT?: ViTriWhereInput | ViTriWhereInput[]
    id?: IntFilter<"ViTri"> | number
    ten_vi_tri?: StringNullableFilter<"ViTri"> | string | null
    tinh_thanh?: StringNullableFilter<"ViTri"> | string | null
    quoc_gia?: StringNullableFilter<"ViTri"> | string | null
    hinh_anh?: StringNullableFilter<"ViTri"> | string | null
    Phong?: PhongListRelationFilter
  }

  export type ViTriOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrderInput | SortOrder
    tinh_thanh?: SortOrderInput | SortOrder
    quoc_gia?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    Phong?: PhongOrderByRelationAggregateInput
    _relevance?: ViTriOrderByRelevanceInput
  }

  export type ViTriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViTriWhereInput | ViTriWhereInput[]
    OR?: ViTriWhereInput[]
    NOT?: ViTriWhereInput | ViTriWhereInput[]
    ten_vi_tri?: StringNullableFilter<"ViTri"> | string | null
    tinh_thanh?: StringNullableFilter<"ViTri"> | string | null
    quoc_gia?: StringNullableFilter<"ViTri"> | string | null
    hinh_anh?: StringNullableFilter<"ViTri"> | string | null
    Phong?: PhongListRelationFilter
  }, "id">

  export type ViTriOrderByWithAggregationInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrderInput | SortOrder
    tinh_thanh?: SortOrderInput | SortOrder
    quoc_gia?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    _count?: ViTriCountOrderByAggregateInput
    _avg?: ViTriAvgOrderByAggregateInput
    _max?: ViTriMaxOrderByAggregateInput
    _min?: ViTriMinOrderByAggregateInput
    _sum?: ViTriSumOrderByAggregateInput
  }

  export type ViTriScalarWhereWithAggregatesInput = {
    AND?: ViTriScalarWhereWithAggregatesInput | ViTriScalarWhereWithAggregatesInput[]
    OR?: ViTriScalarWhereWithAggregatesInput[]
    NOT?: ViTriScalarWhereWithAggregatesInput | ViTriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViTri"> | number
    ten_vi_tri?: StringNullableWithAggregatesFilter<"ViTri"> | string | null
    tinh_thanh?: StringNullableWithAggregatesFilter<"ViTri"> | string | null
    quoc_gia?: StringNullableWithAggregatesFilter<"ViTri"> | string | null
    hinh_anh?: StringNullableWithAggregatesFilter<"ViTri"> | string | null
  }

  export type BinhLuanCreateInput = {
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
    NguoiDung: NguoiDungCreateNestedOneWithoutBinhLuanInput
    Phong: PhongCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateInput = {
    id?: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type BinhLuanUpdateInput = {
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput
    Phong?: PhongUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinhLuanCreateManyInput = {
    id?: number
    ma_phong: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type BinhLuanUpdateManyMutationInput = {
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinhLuanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatPhongCreateInput = {
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatPhongInput
    Phong: PhongCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateInput = {
    id?: number
    ma_phong: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    ma_nguoi_dat: number
  }

  export type DatPhongUpdateInput = {
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput
    Phong?: PhongUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
  }

  export type DatPhongCreateManyInput = {
    id?: number
    ma_phong: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    ma_nguoi_dat: number
  }

  export type DatPhongUpdateManyMutationInput = {
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatPhongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
  }

  export type NguoiDungCreateInput = {
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
  }

  export type NguoiDungUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NguoiDungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhongCreateInput = {
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    ma_vi_tri: number
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongUpdateInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type PhongCreateManyInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    ma_vi_tri: number
  }

  export type PhongUpdateManyMutationInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
  }

  export type ViTriCreateInput = {
    ten_vi_tri?: string | null
    tinh_thanh?: string | null
    quoc_gia?: string | null
    hinh_anh?: string | null
    Phong?: PhongCreateNestedManyWithoutViTriInput
  }

  export type ViTriUncheckedCreateInput = {
    id?: number
    ten_vi_tri?: string | null
    tinh_thanh?: string | null
    quoc_gia?: string | null
    hinh_anh?: string | null
    Phong?: PhongUncheckedCreateNestedManyWithoutViTriInput
  }

  export type ViTriUpdateInput = {
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    Phong?: PhongUpdateManyWithoutViTriNestedInput
  }

  export type ViTriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    Phong?: PhongUncheckedUpdateManyWithoutViTriNestedInput
  }

  export type ViTriCreateManyInput = {
    id?: number
    ten_vi_tri?: string | null
    tinh_thanh?: string | null
    quoc_gia?: string | null
    hinh_anh?: string | null
  }

  export type ViTriUpdateManyMutationInput = {
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViTriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NguoiDungRelationFilter = {
    is?: NguoiDungWhereInput
    isNot?: NguoiDungWhereInput
  }

  export type PhongRelationFilter = {
    is?: PhongWhereInput
    isNot?: PhongWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BinhLuanOrderByRelevanceInput = {
    fields: BinhLuanOrderByRelevanceFieldEnum | BinhLuanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BinhLuanCountOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
  }

  export type BinhLuanAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    sao_binh_luan?: SortOrder
  }

  export type BinhLuanMaxOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
  }

  export type BinhLuanMinOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    ngay_binh_luan?: SortOrder
    noi_dung?: SortOrder
    sao_binh_luan?: SortOrder
  }

  export type BinhLuanSumOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ma_nguoi_binh_luan?: SortOrder
    sao_binh_luan?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DatPhongCountOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
  }

  export type DatPhongAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
  }

  export type DatPhongMaxOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
  }

  export type DatPhongMinOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    ngay_den?: SortOrder
    ngay_di?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
  }

  export type DatPhongSumOrderByAggregateInput = {
    id?: SortOrder
    ma_phong?: SortOrder
    so_luong_khach?: SortOrder
    ma_nguoi_dat?: SortOrder
  }

  export type BinhLuanListRelationFilter = {
    every?: BinhLuanWhereInput
    some?: BinhLuanWhereInput
    none?: BinhLuanWhereInput
  }

  export type DatPhongListRelationFilter = {
    every?: DatPhongWhereInput
    some?: DatPhongWhereInput
    none?: DatPhongWhereInput
  }

  export type BinhLuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatPhongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NguoiDungOrderByRelevanceInput = {
    fields: NguoiDungOrderByRelevanceFieldEnum | NguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NguoiDungCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass_word?: SortOrder
    phone?: SortOrder
    birth_day?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
  }

  export type NguoiDungAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NguoiDungMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass_word?: SortOrder
    phone?: SortOrder
    birth_day?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
  }

  export type NguoiDungMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    pass_word?: SortOrder
    phone?: SortOrder
    birth_day?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
  }

  export type NguoiDungSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ViTriRelationFilter = {
    is?: ViTriWhereInput
    isNot?: ViTriWhereInput
  }

  export type PhongOrderByRelevanceInput = {
    fields: PhongOrderByRelevanceFieldEnum | PhongOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhongCountOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    hinh_anh?: SortOrder
    ma_vi_tri?: SortOrder
  }

  export type PhongAvgOrderByAggregateInput = {
    id?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    gia_tien?: SortOrder
    ma_vi_tri?: SortOrder
  }

  export type PhongMaxOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    hinh_anh?: SortOrder
    ma_vi_tri?: SortOrder
  }

  export type PhongMinOrderByAggregateInput = {
    id?: SortOrder
    ten_phong?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    mo_ta?: SortOrder
    gia_tien?: SortOrder
    may_giat?: SortOrder
    ban_la?: SortOrder
    tivi?: SortOrder
    dieu_hoa?: SortOrder
    wifi?: SortOrder
    bep?: SortOrder
    do_xe?: SortOrder
    ho_boi?: SortOrder
    ban_ui?: SortOrder
    hinh_anh?: SortOrder
    ma_vi_tri?: SortOrder
  }

  export type PhongSumOrderByAggregateInput = {
    id?: SortOrder
    khach?: SortOrder
    phong_ngu?: SortOrder
    giuong?: SortOrder
    phong_tam?: SortOrder
    gia_tien?: SortOrder
    ma_vi_tri?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PhongListRelationFilter = {
    every?: PhongWhereInput
    some?: PhongWhereInput
    none?: PhongWhereInput
  }

  export type PhongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViTriOrderByRelevanceInput = {
    fields: ViTriOrderByRelevanceFieldEnum | ViTriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ViTriCountOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
  }

  export type ViTriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ViTriMaxOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
  }

  export type ViTriMinOrderByAggregateInput = {
    id?: SortOrder
    ten_vi_tri?: SortOrder
    tinh_thanh?: SortOrder
    quoc_gia?: SortOrder
    hinh_anh?: SortOrder
  }

  export type ViTriSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NguoiDungCreateNestedOneWithoutBinhLuanInput = {
    create?: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutBinhLuanInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type PhongCreateNestedOneWithoutBinhLuanInput = {
    create?: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: PhongCreateOrConnectWithoutBinhLuanInput
    connect?: PhongWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput = {
    create?: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutBinhLuanInput
    upsert?: NguoiDungUpsertWithoutBinhLuanInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutBinhLuanInput, NguoiDungUpdateWithoutBinhLuanInput>, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
  }

  export type PhongUpdateOneRequiredWithoutBinhLuanNestedInput = {
    create?: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    connectOrCreate?: PhongCreateOrConnectWithoutBinhLuanInput
    upsert?: PhongUpsertWithoutBinhLuanInput
    connect?: PhongWhereUniqueInput
    update?: XOR<XOR<PhongUpdateToOneWithWhereWithoutBinhLuanInput, PhongUpdateWithoutBinhLuanInput>, PhongUncheckedUpdateWithoutBinhLuanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NguoiDungCreateNestedOneWithoutDatPhongInput = {
    create?: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatPhongInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type PhongCreateNestedOneWithoutDatPhongInput = {
    create?: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: PhongCreateOrConnectWithoutDatPhongInput
    connect?: PhongWhereUniqueInput
  }

  export type NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput = {
    create?: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatPhongInput
    upsert?: NguoiDungUpsertWithoutDatPhongInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutDatPhongInput, NguoiDungUpdateWithoutDatPhongInput>, NguoiDungUncheckedUpdateWithoutDatPhongInput>
  }

  export type PhongUpdateOneRequiredWithoutDatPhongNestedInput = {
    create?: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    connectOrCreate?: PhongCreateOrConnectWithoutDatPhongInput
    upsert?: PhongUpsertWithoutDatPhongInput
    connect?: PhongWhereUniqueInput
    update?: XOR<XOR<PhongUpdateToOneWithWhereWithoutDatPhongInput, PhongUpdateWithoutDatPhongInput>, PhongUncheckedUpdateWithoutDatPhongInput>
  }

  export type BinhLuanCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type BinhLuanUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutNguoiDungInput | BinhLuanUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput | DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput | DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutNguoiDungInput | DatPhongUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput> | BinhLuanCreateWithoutNguoiDungInput[] | BinhLuanUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutNguoiDungInput | BinhLuanCreateOrConnectWithoutNguoiDungInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: BinhLuanCreateManyNguoiDungInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput | BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutNguoiDungInput | BinhLuanUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput> | DatPhongCreateWithoutNguoiDungInput[] | DatPhongUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutNguoiDungInput | DatPhongCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput | DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatPhongCreateManyNguoiDungInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput | DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutNguoiDungInput | DatPhongUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type BinhLuanCreateNestedManyWithoutPhongInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongCreateNestedManyWithoutPhongInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type ViTriCreateNestedOneWithoutPhongInput = {
    create?: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    connectOrCreate?: ViTriCreateOrConnectWithoutPhongInput
    connect?: ViTriWhereUniqueInput
  }

  export type BinhLuanUncheckedCreateNestedManyWithoutPhongInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
  }

  export type DatPhongUncheckedCreateNestedManyWithoutPhongInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BinhLuanUpdateManyWithoutPhongNestedInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutPhongInput | BinhLuanUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutPhongInput | BinhLuanUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutPhongInput | BinhLuanUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUpdateManyWithoutPhongNestedInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutPhongInput | DatPhongUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutPhongInput | DatPhongUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutPhongInput | DatPhongUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type ViTriUpdateOneRequiredWithoutPhongNestedInput = {
    create?: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    connectOrCreate?: ViTriCreateOrConnectWithoutPhongInput
    upsert?: ViTriUpsertWithoutPhongInput
    connect?: ViTriWhereUniqueInput
    update?: XOR<XOR<ViTriUpdateToOneWithWhereWithoutPhongInput, ViTriUpdateWithoutPhongInput>, ViTriUncheckedUpdateWithoutPhongInput>
  }

  export type BinhLuanUncheckedUpdateManyWithoutPhongNestedInput = {
    create?: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput> | BinhLuanCreateWithoutPhongInput[] | BinhLuanUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: BinhLuanCreateOrConnectWithoutPhongInput | BinhLuanCreateOrConnectWithoutPhongInput[]
    upsert?: BinhLuanUpsertWithWhereUniqueWithoutPhongInput | BinhLuanUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: BinhLuanCreateManyPhongInputEnvelope
    set?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    disconnect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    delete?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    connect?: BinhLuanWhereUniqueInput | BinhLuanWhereUniqueInput[]
    update?: BinhLuanUpdateWithWhereUniqueWithoutPhongInput | BinhLuanUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: BinhLuanUpdateManyWithWhereWithoutPhongInput | BinhLuanUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
  }

  export type DatPhongUncheckedUpdateManyWithoutPhongNestedInput = {
    create?: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput> | DatPhongCreateWithoutPhongInput[] | DatPhongUncheckedCreateWithoutPhongInput[]
    connectOrCreate?: DatPhongCreateOrConnectWithoutPhongInput | DatPhongCreateOrConnectWithoutPhongInput[]
    upsert?: DatPhongUpsertWithWhereUniqueWithoutPhongInput | DatPhongUpsertWithWhereUniqueWithoutPhongInput[]
    createMany?: DatPhongCreateManyPhongInputEnvelope
    set?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    disconnect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    delete?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    connect?: DatPhongWhereUniqueInput | DatPhongWhereUniqueInput[]
    update?: DatPhongUpdateWithWhereUniqueWithoutPhongInput | DatPhongUpdateWithWhereUniqueWithoutPhongInput[]
    updateMany?: DatPhongUpdateManyWithWhereWithoutPhongInput | DatPhongUpdateManyWithWhereWithoutPhongInput[]
    deleteMany?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
  }

  export type PhongCreateNestedManyWithoutViTriInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
  }

  export type PhongUncheckedCreateNestedManyWithoutViTriInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
  }

  export type PhongUpdateManyWithoutViTriNestedInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    upsert?: PhongUpsertWithWhereUniqueWithoutViTriInput | PhongUpsertWithWhereUniqueWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    set?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    disconnect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    delete?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    update?: PhongUpdateWithWhereUniqueWithoutViTriInput | PhongUpdateWithWhereUniqueWithoutViTriInput[]
    updateMany?: PhongUpdateManyWithWhereWithoutViTriInput | PhongUpdateManyWithWhereWithoutViTriInput[]
    deleteMany?: PhongScalarWhereInput | PhongScalarWhereInput[]
  }

  export type PhongUncheckedUpdateManyWithoutViTriNestedInput = {
    create?: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput> | PhongCreateWithoutViTriInput[] | PhongUncheckedCreateWithoutViTriInput[]
    connectOrCreate?: PhongCreateOrConnectWithoutViTriInput | PhongCreateOrConnectWithoutViTriInput[]
    upsert?: PhongUpsertWithWhereUniqueWithoutViTriInput | PhongUpsertWithWhereUniqueWithoutViTriInput[]
    createMany?: PhongCreateManyViTriInputEnvelope
    set?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    disconnect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    delete?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    connect?: PhongWhereUniqueInput | PhongWhereUniqueInput[]
    update?: PhongUpdateWithWhereUniqueWithoutViTriInput | PhongUpdateWithWhereUniqueWithoutViTriInput[]
    updateMany?: PhongUpdateManyWithWhereWithoutViTriInput | PhongUpdateManyWithWhereWithoutViTriInput[]
    deleteMany?: PhongScalarWhereInput | PhongScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NguoiDungCreateWithoutBinhLuanInput = {
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    DatPhong?: DatPhongCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutBinhLuanInput = {
    id?: number
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutBinhLuanInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
  }

  export type PhongCreateWithoutBinhLuanInput = {
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutBinhLuanInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    ma_vi_tri: number
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutBinhLuanInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
  }

  export type NguoiDungUpsertWithoutBinhLuanInput = {
    update: XOR<NguoiDungUpdateWithoutBinhLuanInput, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
    create: XOR<NguoiDungCreateWithoutBinhLuanInput, NguoiDungUncheckedCreateWithoutBinhLuanInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutBinhLuanInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutBinhLuanInput, NguoiDungUncheckedUpdateWithoutBinhLuanInput>
  }

  export type NguoiDungUpdateWithoutBinhLuanInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    DatPhong?: DatPhongUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutBinhLuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    DatPhong?: DatPhongUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type PhongUpsertWithoutBinhLuanInput = {
    update: XOR<PhongUpdateWithoutBinhLuanInput, PhongUncheckedUpdateWithoutBinhLuanInput>
    create: XOR<PhongCreateWithoutBinhLuanInput, PhongUncheckedCreateWithoutBinhLuanInput>
    where?: PhongWhereInput
  }

  export type PhongUpdateToOneWithWhereWithoutBinhLuanInput = {
    where?: PhongWhereInput
    data: XOR<PhongUpdateWithoutBinhLuanInput, PhongUncheckedUpdateWithoutBinhLuanInput>
  }

  export type PhongUpdateWithoutBinhLuanInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutBinhLuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type NguoiDungCreateWithoutDatPhongInput = {
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    BinhLuan?: BinhLuanCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutDatPhongInput = {
    id?: number
    name?: string | null
    email?: string | null
    pass_word?: string | null
    phone?: string | null
    birth_day?: string | null
    gender?: string | null
    role?: string | null
    avatar?: string | null
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutDatPhongInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
  }

  export type PhongCreateWithoutDatPhongInput = {
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    ViTri: ViTriCreateNestedOneWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutDatPhongInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    ma_vi_tri: number
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutDatPhongInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
  }

  export type NguoiDungUpsertWithoutDatPhongInput = {
    update: XOR<NguoiDungUpdateWithoutDatPhongInput, NguoiDungUncheckedUpdateWithoutDatPhongInput>
    create: XOR<NguoiDungCreateWithoutDatPhongInput, NguoiDungUncheckedCreateWithoutDatPhongInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutDatPhongInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutDatPhongInput, NguoiDungUncheckedUpdateWithoutDatPhongInput>
  }

  export type NguoiDungUpdateWithoutDatPhongInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutDatPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pass_word?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birth_day?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type PhongUpsertWithoutDatPhongInput = {
    update: XOR<PhongUpdateWithoutDatPhongInput, PhongUncheckedUpdateWithoutDatPhongInput>
    create: XOR<PhongCreateWithoutDatPhongInput, PhongUncheckedCreateWithoutDatPhongInput>
    where?: PhongWhereInput
  }

  export type PhongUpdateToOneWithWhereWithoutDatPhongInput = {
    where?: PhongWhereInput
    data: XOR<PhongUpdateWithoutDatPhongInput, PhongUncheckedUpdateWithoutDatPhongInput>
  }

  export type PhongUpdateWithoutDatPhongInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    ViTri?: ViTriUpdateOneRequiredWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutDatPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    ma_vi_tri?: IntFieldUpdateOperationsInput | number
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type BinhLuanCreateWithoutNguoiDungInput = {
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
    Phong: PhongCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type BinhLuanCreateOrConnectWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    create: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput>
  }

  export type BinhLuanCreateManyNguoiDungInputEnvelope = {
    data: BinhLuanCreateManyNguoiDungInput | BinhLuanCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type DatPhongCreateWithoutNguoiDungInput = {
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    Phong: PhongCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
  }

  export type DatPhongCreateOrConnectWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    create: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatPhongCreateManyNguoiDungInputEnvelope = {
    data: DatPhongCreateManyNguoiDungInput | DatPhongCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type BinhLuanUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    update: XOR<BinhLuanUpdateWithoutNguoiDungInput, BinhLuanUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<BinhLuanCreateWithoutNguoiDungInput, BinhLuanUncheckedCreateWithoutNguoiDungInput>
  }

  export type BinhLuanUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: BinhLuanWhereUniqueInput
    data: XOR<BinhLuanUpdateWithoutNguoiDungInput, BinhLuanUncheckedUpdateWithoutNguoiDungInput>
  }

  export type BinhLuanUpdateManyWithWhereWithoutNguoiDungInput = {
    where: BinhLuanScalarWhereInput
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type BinhLuanScalarWhereInput = {
    AND?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
    OR?: BinhLuanScalarWhereInput[]
    NOT?: BinhLuanScalarWhereInput | BinhLuanScalarWhereInput[]
    id?: IntFilter<"BinhLuan"> | number
    ma_phong?: IntFilter<"BinhLuan"> | number
    ma_nguoi_binh_luan?: IntFilter<"BinhLuan"> | number
    ngay_binh_luan?: DateTimeNullableFilter<"BinhLuan"> | Date | string | null
    noi_dung?: StringNullableFilter<"BinhLuan"> | string | null
    sao_binh_luan?: IntNullableFilter<"BinhLuan"> | number | null
  }

  export type DatPhongUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    update: XOR<DatPhongUpdateWithoutNguoiDungInput, DatPhongUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<DatPhongCreateWithoutNguoiDungInput, DatPhongUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatPhongUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: DatPhongWhereUniqueInput
    data: XOR<DatPhongUpdateWithoutNguoiDungInput, DatPhongUncheckedUpdateWithoutNguoiDungInput>
  }

  export type DatPhongUpdateManyWithWhereWithoutNguoiDungInput = {
    where: DatPhongScalarWhereInput
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type DatPhongScalarWhereInput = {
    AND?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
    OR?: DatPhongScalarWhereInput[]
    NOT?: DatPhongScalarWhereInput | DatPhongScalarWhereInput[]
    id?: IntFilter<"DatPhong"> | number
    ma_phong?: IntFilter<"DatPhong"> | number
    ngay_den?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    ngay_di?: DateTimeNullableFilter<"DatPhong"> | Date | string | null
    so_luong_khach?: IntNullableFilter<"DatPhong"> | number | null
    ma_nguoi_dat?: IntFilter<"DatPhong"> | number
  }

  export type BinhLuanCreateWithoutPhongInput = {
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
    NguoiDung: NguoiDungCreateNestedOneWithoutBinhLuanInput
  }

  export type BinhLuanUncheckedCreateWithoutPhongInput = {
    id?: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type BinhLuanCreateOrConnectWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    create: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanCreateManyPhongInputEnvelope = {
    data: BinhLuanCreateManyPhongInput | BinhLuanCreateManyPhongInput[]
    skipDuplicates?: boolean
  }

  export type DatPhongCreateWithoutPhongInput = {
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatPhongInput
  }

  export type DatPhongUncheckedCreateWithoutPhongInput = {
    id?: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    ma_nguoi_dat: number
  }

  export type DatPhongCreateOrConnectWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    create: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput>
  }

  export type DatPhongCreateManyPhongInputEnvelope = {
    data: DatPhongCreateManyPhongInput | DatPhongCreateManyPhongInput[]
    skipDuplicates?: boolean
  }

  export type ViTriCreateWithoutPhongInput = {
    ten_vi_tri?: string | null
    tinh_thanh?: string | null
    quoc_gia?: string | null
    hinh_anh?: string | null
  }

  export type ViTriUncheckedCreateWithoutPhongInput = {
    id?: number
    ten_vi_tri?: string | null
    tinh_thanh?: string | null
    quoc_gia?: string | null
    hinh_anh?: string | null
  }

  export type ViTriCreateOrConnectWithoutPhongInput = {
    where: ViTriWhereUniqueInput
    create: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanUpsertWithWhereUniqueWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    update: XOR<BinhLuanUpdateWithoutPhongInput, BinhLuanUncheckedUpdateWithoutPhongInput>
    create: XOR<BinhLuanCreateWithoutPhongInput, BinhLuanUncheckedCreateWithoutPhongInput>
  }

  export type BinhLuanUpdateWithWhereUniqueWithoutPhongInput = {
    where: BinhLuanWhereUniqueInput
    data: XOR<BinhLuanUpdateWithoutPhongInput, BinhLuanUncheckedUpdateWithoutPhongInput>
  }

  export type BinhLuanUpdateManyWithWhereWithoutPhongInput = {
    where: BinhLuanScalarWhereInput
    data: XOR<BinhLuanUpdateManyMutationInput, BinhLuanUncheckedUpdateManyWithoutPhongInput>
  }

  export type DatPhongUpsertWithWhereUniqueWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    update: XOR<DatPhongUpdateWithoutPhongInput, DatPhongUncheckedUpdateWithoutPhongInput>
    create: XOR<DatPhongCreateWithoutPhongInput, DatPhongUncheckedCreateWithoutPhongInput>
  }

  export type DatPhongUpdateWithWhereUniqueWithoutPhongInput = {
    where: DatPhongWhereUniqueInput
    data: XOR<DatPhongUpdateWithoutPhongInput, DatPhongUncheckedUpdateWithoutPhongInput>
  }

  export type DatPhongUpdateManyWithWhereWithoutPhongInput = {
    where: DatPhongScalarWhereInput
    data: XOR<DatPhongUpdateManyMutationInput, DatPhongUncheckedUpdateManyWithoutPhongInput>
  }

  export type ViTriUpsertWithoutPhongInput = {
    update: XOR<ViTriUpdateWithoutPhongInput, ViTriUncheckedUpdateWithoutPhongInput>
    create: XOR<ViTriCreateWithoutPhongInput, ViTriUncheckedCreateWithoutPhongInput>
    where?: ViTriWhereInput
  }

  export type ViTriUpdateToOneWithWhereWithoutPhongInput = {
    where?: ViTriWhereInput
    data: XOR<ViTriUpdateWithoutPhongInput, ViTriUncheckedUpdateWithoutPhongInput>
  }

  export type ViTriUpdateWithoutPhongInput = {
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViTriUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_vi_tri?: NullableStringFieldUpdateOperationsInput | string | null
    tinh_thanh?: NullableStringFieldUpdateOperationsInput | string | null
    quoc_gia?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhongCreateWithoutViTriInput = {
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    BinhLuan?: BinhLuanCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongCreateNestedManyWithoutPhongInput
  }

  export type PhongUncheckedCreateWithoutViTriInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
    BinhLuan?: BinhLuanUncheckedCreateNestedManyWithoutPhongInput
    DatPhong?: DatPhongUncheckedCreateNestedManyWithoutPhongInput
  }

  export type PhongCreateOrConnectWithoutViTriInput = {
    where: PhongWhereUniqueInput
    create: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput>
  }

  export type PhongCreateManyViTriInputEnvelope = {
    data: PhongCreateManyViTriInput | PhongCreateManyViTriInput[]
    skipDuplicates?: boolean
  }

  export type PhongUpsertWithWhereUniqueWithoutViTriInput = {
    where: PhongWhereUniqueInput
    update: XOR<PhongUpdateWithoutViTriInput, PhongUncheckedUpdateWithoutViTriInput>
    create: XOR<PhongCreateWithoutViTriInput, PhongUncheckedCreateWithoutViTriInput>
  }

  export type PhongUpdateWithWhereUniqueWithoutViTriInput = {
    where: PhongWhereUniqueInput
    data: XOR<PhongUpdateWithoutViTriInput, PhongUncheckedUpdateWithoutViTriInput>
  }

  export type PhongUpdateManyWithWhereWithoutViTriInput = {
    where: PhongScalarWhereInput
    data: XOR<PhongUpdateManyMutationInput, PhongUncheckedUpdateManyWithoutViTriInput>
  }

  export type PhongScalarWhereInput = {
    AND?: PhongScalarWhereInput | PhongScalarWhereInput[]
    OR?: PhongScalarWhereInput[]
    NOT?: PhongScalarWhereInput | PhongScalarWhereInput[]
    id?: IntFilter<"Phong"> | number
    ten_phong?: StringNullableFilter<"Phong"> | string | null
    khach?: IntNullableFilter<"Phong"> | number | null
    phong_ngu?: IntNullableFilter<"Phong"> | number | null
    giuong?: IntNullableFilter<"Phong"> | number | null
    phong_tam?: IntNullableFilter<"Phong"> | number | null
    mo_ta?: StringNullableFilter<"Phong"> | string | null
    gia_tien?: IntNullableFilter<"Phong"> | number | null
    may_giat?: BoolNullableFilter<"Phong"> | boolean | null
    ban_la?: BoolNullableFilter<"Phong"> | boolean | null
    tivi?: BoolNullableFilter<"Phong"> | boolean | null
    dieu_hoa?: BoolNullableFilter<"Phong"> | boolean | null
    wifi?: BoolNullableFilter<"Phong"> | boolean | null
    bep?: BoolNullableFilter<"Phong"> | boolean | null
    do_xe?: BoolNullableFilter<"Phong"> | boolean | null
    ho_boi?: BoolNullableFilter<"Phong"> | boolean | null
    ban_ui?: BoolNullableFilter<"Phong"> | boolean | null
    hinh_anh?: StringNullableFilter<"Phong"> | string | null
    ma_vi_tri?: IntFilter<"Phong"> | number
  }

  export type BinhLuanCreateManyNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type DatPhongCreateManyNguoiDungInput = {
    id?: number
    ma_phong: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
  }

  export type BinhLuanUpdateWithoutNguoiDungInput = {
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    Phong?: PhongUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinhLuanUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatPhongUpdateWithoutNguoiDungInput = {
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    Phong?: PhongUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatPhongUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_phong?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinhLuanCreateManyPhongInput = {
    id?: number
    ma_nguoi_binh_luan: number
    ngay_binh_luan?: Date | string | null
    noi_dung?: string | null
    sao_binh_luan?: number | null
  }

  export type DatPhongCreateManyPhongInput = {
    id?: number
    ngay_den?: Date | string | null
    ngay_di?: Date | string | null
    so_luong_khach?: number | null
    ma_nguoi_dat: number
  }

  export type BinhLuanUpdateWithoutPhongInput = {
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutBinhLuanNestedInput
  }

  export type BinhLuanUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BinhLuanUncheckedUpdateManyWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_nguoi_binh_luan?: IntFieldUpdateOperationsInput | number
    ngay_binh_luan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    sao_binh_luan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatPhongUpdateWithoutPhongInput = {
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatPhongNestedInput
  }

  export type DatPhongUncheckedUpdateWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
  }

  export type DatPhongUncheckedUpdateManyWithoutPhongInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngay_den?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ngay_di?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    so_luong_khach?: NullableIntFieldUpdateOperationsInput | number | null
    ma_nguoi_dat?: IntFieldUpdateOperationsInput | number
  }

  export type PhongCreateManyViTriInput = {
    id?: number
    ten_phong?: string | null
    khach?: number | null
    phong_ngu?: number | null
    giuong?: number | null
    phong_tam?: number | null
    mo_ta?: string | null
    gia_tien?: number | null
    may_giat?: boolean | null
    ban_la?: boolean | null
    tivi?: boolean | null
    dieu_hoa?: boolean | null
    wifi?: boolean | null
    bep?: boolean | null
    do_xe?: boolean | null
    ho_boi?: boolean | null
    ban_ui?: boolean | null
    hinh_anh?: string | null
  }

  export type PhongUpdateWithoutViTriInput = {
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUpdateManyWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateWithoutViTriInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    BinhLuan?: BinhLuanUncheckedUpdateManyWithoutPhongNestedInput
    DatPhong?: DatPhongUncheckedUpdateManyWithoutPhongNestedInput
  }

  export type PhongUncheckedUpdateManyWithoutViTriInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten_phong?: NullableStringFieldUpdateOperationsInput | string | null
    khach?: NullableIntFieldUpdateOperationsInput | number | null
    phong_ngu?: NullableIntFieldUpdateOperationsInput | number | null
    giuong?: NullableIntFieldUpdateOperationsInput | number | null
    phong_tam?: NullableIntFieldUpdateOperationsInput | number | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia_tien?: NullableIntFieldUpdateOperationsInput | number | null
    may_giat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_la?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tivi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dieu_hoa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bep?: NullableBoolFieldUpdateOperationsInput | boolean | null
    do_xe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ho_boi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ban_ui?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NguoiDungCountOutputTypeDefaultArgs instead
     */
    export type NguoiDungCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhongCountOutputTypeDefaultArgs instead
     */
    export type PhongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViTriCountOutputTypeDefaultArgs instead
     */
    export type ViTriCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViTriCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BinhLuanDefaultArgs instead
     */
    export type BinhLuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BinhLuanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DatPhongDefaultArgs instead
     */
    export type DatPhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DatPhongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NguoiDungDefaultArgs instead
     */
    export type NguoiDungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NguoiDungDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhongDefaultArgs instead
     */
    export type PhongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViTriDefaultArgs instead
     */
    export type ViTriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViTriDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}