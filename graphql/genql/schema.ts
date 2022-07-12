import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    ID: string,
    Boolean: boolean,
}

export interface Chapter {
    id: Scalars['String']
    text: Scalars['String']
    __typename: 'Chapter'
}

export interface Idea {
    chapters: Chapter[]
    content: Scalars['ID']
    id: Scalars['ID']
    __typename: 'Idea'
}

export interface Mutation {
    addChapter: Chapter
    createIdea: Idea
    __typename: 'Mutation'
}

export interface Query {
    ideas: Idea[]
    __typename: 'Query'
}

export interface ChapterRequest{
    id?: boolean | number
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdeaRequest{
    chapters?: ChapterRequest
    content?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    addChapter?: [{ideaID: Scalars['String'],text: Scalars['String']},ChapterRequest]
    createIdea?: [{content: Scalars['String']},IdeaRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    ideas?: IdeaRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Chapter_possibleTypes: string[] = ['Chapter']
export const isChapter = (obj?: { __typename?: any } | null): obj is Chapter => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isChapter"')
  return Chapter_possibleTypes.includes(obj.__typename)
}



const Idea_possibleTypes: string[] = ['Idea']
export const isIdea = (obj?: { __typename?: any } | null): obj is Idea => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isIdea"')
  return Idea_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface ChapterPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ChapterObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface IdeaPromiseChain{
    chapters: ({get: <R extends ChapterRequest>(request: R, defaultValue?: FieldsSelection<Chapter, R>[]) => Promise<FieldsSelection<Chapter, R>[]>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>})
}

export interface IdeaObservableChain{
    chapters: ({get: <R extends ChapterRequest>(request: R, defaultValue?: FieldsSelection<Chapter, R>[]) => Observable<FieldsSelection<Chapter, R>[]>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>})
}

export interface MutationPromiseChain{
    addChapter: ((args: {ideaID: Scalars['String'],text: Scalars['String']}) => ChapterPromiseChain & {get: <R extends ChapterRequest>(request: R, defaultValue?: FieldsSelection<Chapter, R>) => Promise<FieldsSelection<Chapter, R>>}),
    createIdea: ((args: {content: Scalars['String']}) => IdeaPromiseChain & {get: <R extends IdeaRequest>(request: R, defaultValue?: FieldsSelection<Idea, R>) => Promise<FieldsSelection<Idea, R>>})
}

export interface MutationObservableChain{
    addChapter: ((args: {ideaID: Scalars['String'],text: Scalars['String']}) => ChapterObservableChain & {get: <R extends ChapterRequest>(request: R, defaultValue?: FieldsSelection<Chapter, R>) => Observable<FieldsSelection<Chapter, R>>}),
    createIdea: ((args: {content: Scalars['String']}) => IdeaObservableChain & {get: <R extends IdeaRequest>(request: R, defaultValue?: FieldsSelection<Idea, R>) => Observable<FieldsSelection<Idea, R>>})
}

export interface QueryPromiseChain{
    ideas: ({get: <R extends IdeaRequest>(request: R, defaultValue?: FieldsSelection<Idea, R>[]) => Promise<FieldsSelection<Idea, R>[]>})
}

export interface QueryObservableChain{
    ideas: ({get: <R extends IdeaRequest>(request: R, defaultValue?: FieldsSelection<Idea, R>[]) => Observable<FieldsSelection<Idea, R>[]>})
}