import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: 'sphinx_messages', underscored: true})
export default class Message extends Model<Message> {

  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  })
  id: number

  @Column(DataType.BIGINT)
  chatId: number

  @Column(DataType.BIGINT)
  type: number

  @Column(DataType.BIGINT)
  sender: number

  @Column(DataType.BIGINT)
  receiver: number

  @Column(DataType.DECIMAL)
  amount: number

  @Column(DataType.DECIMAL)
  amountMsat: number

  @Column
  paymentHash: string

  @Column(DataType.TEXT)
  paymentRequest: string

  @Column
  date: Date

  @Column
  expirationDate: Date

  @Column(DataType.TEXT)
  messageContent: string

  @Column(DataType.TEXT)
  remoteMessageContent: string

  @Column(DataType.BIGINT)
  status: number

  @Column(DataType.TEXT)
  statusMap: string

  @Column(DataType.BIGINT)
  parentId: number

  @Column(DataType.BIGINT)
  subscriptionId: number

  @Column
  mediaKey: string

  @Column
  mediaType: string

  @Column
  mediaToken: string

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false
  })
  seen: boolean
  
  @Column
  createdAt: Date

  @Column
  updatedAt: Date
}