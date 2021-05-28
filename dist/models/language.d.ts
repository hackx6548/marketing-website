declare const _exports: {
    new (doc?: any): any;
    aggregate<R = any>(pipeline?: any[] | undefined): mongoose.Aggregate<R[]>;
    aggregate<R_1 = any>(pipeline: any[], cb: Function): Promise<R_1[]>;
    base: typeof mongoose;
    baseModelName: string | undefined;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions | undefined): Promise<import("mongodb").BulkWriteOpResultObject>;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions | undefined, cb?: ((err: any, res: import("mongodb").BulkWriteOpResultObject) => void) | undefined): void;
    collection: mongoose.Collection;
    count(callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<number, any, {}>;
    count(filter: mongoose.FilterQuery<any>, callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<number, any, {}>;
    countDocuments(callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<number, any, {}>;
    countDocuments(filter: mongoose.FilterQuery<any>, callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<number, any, {}>;
    create(docs: any[], options?: mongoose.SaveOptions | undefined): Promise<any[]>;
    create(docs: any[], callback: (err: mongoose.CallbackError, docs: any[]) => void): void;
    create(doc: any): Promise<any>;
    create(doc: any, callback: (err: mongoose.CallbackError, doc: any) => void): void;
    create<DocContents = any>(docs: DocContents[], options?: mongoose.SaveOptions | undefined): Promise<any[]>;
    create<DocContents_1 = any>(docs: DocContents_1[], callback: (err: mongoose.CallbackError, docs: any[]) => void): void;
    create<DocContents_2 = any>(doc: DocContents_2): Promise<any>;
    create<DocContents_3 = any>(...docs: DocContents_3[]): Promise<any[]>;
    create<DocContents_4 = any>(doc: DocContents_4, callback: (err: mongoose.CallbackError, doc: any) => void): void;
    createCollection(options?: import("mongodb").CollectionCreateOptions | undefined): Promise<import("mongodb").Collection<any>>;
    createCollection(options: import("mongodb").CollectionCreateOptions | null, callback: (err: mongoose.CallbackError, collection: import("mongodb").Collection<any>) => void): void;
    createIndexes(callback?: ((err: any) => void) | undefined): Promise<void>;
    createIndexes(options?: any, callback?: ((err: any) => void) | undefined): Promise<void>;
    db: mongoose.Connection;
    deleteMany(filter?: mongoose.FilterQuery<any> | undefined, options?: mongoose.QueryOptions | undefined, callback?: ((err: mongoose.CallbackError) => void) | undefined): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    deleteMany(filter: mongoose.FilterQuery<any>, callback: (err: mongoose.CallbackError) => void): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    deleteMany(callback: (err: mongoose.CallbackError) => void): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    deleteOne(filter?: mongoose.FilterQuery<any> | undefined, options?: mongoose.QueryOptions | undefined, callback?: ((err: mongoose.CallbackError) => void) | undefined): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    deleteOne(filter: mongoose.FilterQuery<any>, callback: (err: mongoose.CallbackError) => void): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    deleteOne(callback: (err: mongoose.CallbackError) => void): mongoose.Query<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }, any, {}>;
    ensureIndexes(callback?: ((err: any) => void) | undefined): Promise<void>;
    ensureIndexes(options?: any, callback?: ((err: any) => void) | undefined): Promise<void>;
    events: NodeJS.EventEmitter;
    findById(id: any, projection?: any, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: mongoose.CallbackError, doc: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOne(filter?: mongoose.FilterQuery<any> | undefined, projection?: any, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: mongoose.CallbackError, doc: any) => void) | undefined): mongoose.Query<any, any, {}>;
    hydrate(obj: any): any;
    init(callback?: ((err: any) => void) | undefined): Promise<any>;
    insertMany(docs: any[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(docs: any[], options?: mongoose.InsertManyOptions | undefined): Promise<any[]>;
    insertMany(doc: any, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(doc: any, options?: mongoose.InsertManyOptions | undefined): Promise<any>;
    insertMany(doc: any, options?: mongoose.InsertManyOptions | undefined, callback?: ((err: mongoose.CallbackError, res: any) => void) | undefined): void;
    insertMany(docs: any[], options?: mongoose.InsertManyOptions | undefined, callback?: ((err: mongoose.CallbackError, res: any[] | mongoose.InsertManyResult) => void) | undefined): void;
    listIndexes(callback: (err: mongoose.CallbackError, res: any[]) => void): void;
    listIndexes(): Promise<any[]>;
    modelName: string;
    populate(docs: any[], options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: ((err: any, res: any[]) => void) | undefined): Promise<any[]>;
    populate(doc: any, options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: ((err: any, res: any) => void) | undefined): Promise<any>;
    syncIndexes(options?: Record<string, unknown> | undefined): Promise<string[]>;
    syncIndexes(options: Record<string, unknown> | null, callback: (err: mongoose.CallbackError, dropped: string[]) => void): void;
    startSession(options?: import("mongodb").SessionOptions | undefined, cb?: ((err: any, session: import("mongodb").ClientSession) => void) | undefined): Promise<import("mongodb").ClientSession>;
    validate(callback?: ((err: any) => void) | undefined): Promise<void>;
    validate(optional: any, callback?: ((err: any) => void) | undefined): Promise<void>;
    validate(optional: any, pathsToValidate: string[], callback?: ((err: any) => void) | undefined): Promise<void>;
    watch(pipeline?: Record<string, unknown>[] | undefined, options?: import("mongodb").ChangeStreamOptions | undefined): import("mongodb").ChangeStream<any>;
    $where(argument: string | Function): mongoose.Query<any[], any, {}>;
    discriminators: {
        [name: string]: mongoose.Model<any, {}, {}>;
    } | undefined;
    translateAliases(raw: any): any;
    distinct(field: string, filter?: mongoose.FilterQuery<any> | undefined, callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<any[], any, {}>;
    estimatedDocumentCount(options?: mongoose.QueryOptions | undefined, callback?: ((err: any, count: number) => void) | undefined): mongoose.Query<number, any, {}>;
    exists(filter: mongoose.FilterQuery<any>): Promise<boolean>;
    exists(filter: mongoose.FilterQuery<any>, callback: (err: any, res: boolean) => void): void;
    find(callback?: ((err: any, docs: any[]) => void) | undefined): mongoose.Query<any[], any, {}>;
    find(filter: mongoose.FilterQuery<any>, callback?: ((err: any, docs: any[]) => void) | undefined): mongoose.Query<any[], any, {}>;
    find(filter: mongoose.FilterQuery<any>, projection?: any, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, docs: any[]) => void) | undefined): mongoose.Query<any[], any, {}>;
    findByIdAndDelete(id?: any, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findByIdAndRemove(id?: any, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: ((err: any, doc: import("mongodb").FindAndModifyWriteOpResultObject<any>, res: any) => void) | undefined): mongoose.Query<import("mongodb").FindAndModifyWriteOpResultObject<any>, any, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findByIdAndUpdate(id?: any, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndDelete(filter?: mongoose.FilterQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndRemove(filter?: mongoose.FilterQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndReplace(filter: mongoose.FilterQuery<any>, replacement: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndReplace(filter?: mongoose.FilterQuery<any> | undefined, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndUpdate(filter: mongoose.FilterQuery<any>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: ((err: any, doc: import("mongodb").FindAndModifyWriteOpResultObject<any>, res: any) => void) | undefined): mongoose.Query<import("mongodb").FindAndModifyWriteOpResultObject<any>, any, {}>;
    findOneAndUpdate(filter: mongoose.FilterQuery<any>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    findOneAndUpdate(filter?: mongoose.FilterQuery<any> | undefined, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, doc: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    geoSearch(filter?: mongoose.FilterQuery<any> | undefined, options?: mongoose.GeoSearchOptions | undefined, callback?: ((err: mongoose.CallbackError, res: any[]) => void) | undefined): mongoose.Query<any[], any, {}>;
    mapReduce<Key, Value>(o: mongoose.MapReduceOptions<any, Key, Value>, callback?: ((err: any, res: any) => void) | undefined): Promise<any>;
    remove(filter?: any, callback?: ((err: mongoose.CallbackError) => void) | undefined): mongoose.Query<any, any, {}>;
    replaceOne(filter?: mongoose.FilterQuery<any> | undefined, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined): mongoose.Query<any, any, {}>;
    schema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
    update(filter?: mongoose.FilterQuery<any> | undefined, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined): mongoose.Query<mongoose.UpdateWriteOpResult, any, {}>;
    updateMany(filter?: mongoose.FilterQuery<any> | undefined, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined): mongoose.Query<mongoose.UpdateWriteOpResult, any, {}>;
    updateOne(filter?: mongoose.FilterQuery<any> | undefined, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any> | undefined, options?: mongoose.QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined): mongoose.Query<mongoose.UpdateWriteOpResult, any, {}>;
    where(path: string, val?: any): mongoose.Query<any[], any, {}>;
    where(obj: object): mongoose.Query<any[], any, {}>;
    where(): mongoose.Query<any[], any, {}>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    on(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    once(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    off(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    removeAllListeners(event?: string | symbol | undefined): mongoose.Model<any, {}, {}>;
    setMaxListeners(n: number): mongoose.Model<any, {}, {}>;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    emit(event: string | symbol, ...args: any[]): boolean;
    listenerCount(event: string | symbol): number;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, {}, {}>;
    eventNames(): (string | symbol)[];
    discriminator<D extends mongoose.Document<any, any>>(name: string | number, schema: mongoose.Schema<D, mongoose.Model<any, any, any>, undefined>, value?: string | number | mongoose.Schema.Types.ObjectId | undefined): mongoose.Model<D, {}, {}>;
    discriminator<T extends mongoose.Document<any, any>, U extends mongoose.Model<T, {}, {}>>(name: string | number, schema: mongoose.Schema<T, U, undefined>, value?: string | number | mongoose.Schema.Types.ObjectId | undefined): U;
};
export = _exports;
import mongoose = require("mongoose");
