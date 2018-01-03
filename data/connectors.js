import Sequelize from 'sequelize'

import {
  catDataMock,
  siblingDataMock,
  earDataMock,
  eyeDataMock,
  noseDataMock,
  mouthDataMock,
  whiskerDataMock,
  bodyDataMock,
  furDataMock,
  tailDataMock,
  characteristicsDataMock
} from './mocks'

const db = new Sequelize('nyanlife', null, null, {
  dialect: 'sqlite',
  storage: './nyanlife.sqlite',
})

const CatModel = db.define('cat', {
  name: { type: Sequelize.STRING },
  ownerID: { type: Sequelize.INTEGER },
  momID: { type: Sequelize.INTEGER },
  dadID: { type: Sequelize.INTEGER },
  personality: { type: Sequelize.INTEGER },
  rarity: { type: Sequelize.INTEGER },
})

const CharacteristicModel = db.define('characteristic', {
  ear: { type: Sequelize.STRING },
  eye: { type: Sequelize.STRING },
  nose: { type: Sequelize.STRING },
  mouth: { type: Sequelize.STRING },
  whisker: { type: Sequelize.STRING },
  body: { type: Sequelize.STRING },
  fur: { type: Sequelize.STRING },
  tail: { type: Sequelize.STRING },
})

const EarModel = db.define('ear', {
  name: { type: Sequelize.STRING },
})

const EyeModel = db.define('eye', {
  name: { type: Sequelize.STRING },
})

const NoseModel = db.define('nose', {
  name: { type: Sequelize.STRING },
})

const MouthModel = db.define('mouth', {
  name: { type: Sequelize.STRING },
})

const WhiskerModel = db.define('whisker', {
  name: { type: Sequelize.STRING },
})

const BodyModel = db.define('body', {
  name: { type: Sequelize.STRING },
})

const FurModel = db.define('fur', {
  name: { type: Sequelize.STRING },
})

const TailModel = db.define('tail', {
  name: { type: Sequelize.STRING },
})

const SiblingModel = db.define('sibling', {
  siblingCatID: { type: Sequelize.INTEGER },
})

CatModel.hasOne(CharacteristicModel)
CharacteristicModel.belongsTo(CatModel)

CatModel.hasMany(SiblingModel)
SiblingModel.belongsTo(CatModel)

db.sync({ force: true }).then(() => {

  earDataMock.forEach(ear => EarModel.create(ear))

  eyeDataMock.forEach(eye => EyeModel.create(eye))

  noseDataMock.forEach(nose => NoseModel.create(nose))

  mouthDataMock.forEach(mouth => MouthModel.create(mouth))

  whiskerDataMock.forEach(whisker => WhiskerModel.create(whisker))

  bodyDataMock.forEach(body => BodyModel.create(body))

  furDataMock.forEach(fur => FurModel.create(fur))

  tailDataMock.forEach(tail => TailModel.create(tail))

  catDataMock.forEach((cat, index) => {
    return CatModel.create(cat)
      .then(newCat => {
        return newCat.createCharacteristic(characteristicsDataMock[index])
          .then(() => {
            return newCat.createSibling(siblingDataMock[index])
          })
      })
  })
})

const Cat = db.models.cat
const Characteristic = db.models.characteristic
const Ear = db.models.ear
const Eye = db.models.eye
const Nose = db.models.nose
const Mouth = db.models.mouth
const Whisker = db.models.whisker
const Body = db.models.body
const Fur = db.models.fur
const Tail = db.models.tail
const Sibling = db.models.sibling

export {
  Cat,
  Characteristic,
  Ear,
  Eye,
  Nose,
  Mouth,
  Whisker,
  Body,
  Fur,
  Tail,
  Sibling
}