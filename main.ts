import app from './src/app'
import { PORT } from './src/config/app.config'

app.listen(PORT || 3000, () => {
  console.log(`服务成功运行在${PORT}端口上1111111`)
})
