import { Table, Column, Model, DataType } from 'sequelize-typescript';

/*
Used for media uploads. When you upload a file,
also upload the symetric key encrypted for each chat member.
When they buy the file, they can retrieve the key from here.

"received" media keys are not stored here, only in Message
*/

@Table({tableName: 'sphinx_media_keys', underscored: true})
export default class MediaKey extends Model<MediaKey> {

  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  })
  id: number
  
  @Column
  muid: string

  @Column(DataType.BIGINT)
  chatId: number

  @Column(DataType.BIGINT)
  receiver: number

  @Column
  key: string

  @Column(DataType.BIGINT)
  messageId: number
  
  @Column
  createdAt: Date
}