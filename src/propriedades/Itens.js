export default class Itens {
  static list = {
    name: 'posts',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'String',
      status: 'String'
    }
  }
}