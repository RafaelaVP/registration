class BaseRepository {
    constructor(schema) {
      this._schema = schema;
    }
  
    async create(payload) {
      const result = await this._schema.create(payload);
      return result;
    }
}

module.exports = BaseRepository;