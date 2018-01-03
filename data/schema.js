import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Query {
 cat(id: Int, name: String): Cat
 allCats: [Cat]
}

type Cat {
  id: Int
  name: String
  ownerID: Int
  momID: Int
  dadID: Int
  siblings: [Siblings]
  characteristic: Characteristic
  personality: Int
  rarity: Int
}

type Characteristic {
  id: Int
  ear: Ear
  eye: Eye
  nose: Nose
  mouth: Mouth
  whisker: Whisker
  body: Body
  fur: Fur
  tail: Tail
  cat: Cat
}

type Siblings {
  id: Int
  siblingCatID: Int
  cat: Cat
}

type Ear {
  id: Int
  name: String
}

type Eye {
  id: Int
  name: String
}

type Nose {
  id: Int
  name: String
}

type Mouth {
  id: Int
  name: String
}

type Whisker {
  id: Int
  name: String
}

type Body {
  id: Int
  name: String
}

type Fur {
  id: Int
  name: String
}

type Tail {
  id: Int
  name: String
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
