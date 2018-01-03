import { Ear, Eye, Nose, Mouth, Whisker, Body, Fur, Tail } from '../connectors'

const Characteristic = {
  ear(characteristic) {
    return Ear.findById(characteristic.ear)
  },
  eye(characteristic) {
    return Eye.findById(characteristic.eye)
  },
  nose(characteristic) {
    return Nose.findById(characteristic.nose)
  },
  mouth(characteristic) {
    return Mouth.findById(characteristic.mouth)
  },
  whisker(characteristic) {
    return Whisker.findById(characteristic.whisker)
  },
  body(characteristic) {
    return Body.findById(characteristic.body)
  },
  fur(characteristic) {
    return Fur.findById(characteristic.fur)
  },
  tail(characteristic) {
    return Tail.findById(characteristic.tail)
  }
}

export default Characteristic

/*
const Characteristics = {
  characteristics: {
    ears: 1,
    eyes: 1,
    nose: 1,
    mouth: 1,
    whiskers: 1,
    body: 1,
    fur: 1,
    tail: 1
  }
}
 */