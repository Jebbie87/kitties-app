import { Cat } from '../connectors'

const Query = {
  cat(_, args) {
    return Cat.find({ where: args });
  },
  allCats(_, args) {
    return Cat.findAll();
  }
}

export default Query