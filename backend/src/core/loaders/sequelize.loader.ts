import { Sequelize } from 'sequelize-typescript'

import config from '@core/config'
import { Credential, JobQueue, Campaign, User, Worker } from '@core/models'
import { EmailMessage, EmailTemplate } from '@email/models'
import { SmsMessage, SmsTemplate } from '@sms/models'
import logger from '@core/logger'

const DB_URI = config.database.databaseUri

const sequelizeLoader = async (): Promise<Sequelize> => {
  const dialectOptions = config.IS_PROD ? { ...config.database.dialectOptions } : {}
  const sequelize = new Sequelize(DB_URI, {
    dialect: 'postgres',
    logging: false,
    pool: config.database.poolOptions,
    ...dialectOptions,
  })

  const coreModels = [Credential, JobQueue, Campaign, User, Worker]
  const emailModels = [EmailMessage, EmailTemplate]
  const smsModels = [SmsMessage, SmsTemplate]
  sequelize.addModels([...coreModels, ...emailModels, ...smsModels])

  try {
    const synced = await sequelize.sync()
    logger.info({ message: 'Database loaded.' })
    return synced
  } catch (err) {
    logger.error(`Unable to connect to database: ${err}`)
    process.exit(1)
  }
}

export default sequelizeLoader