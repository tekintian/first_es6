/**
 * 命令行工具包
* @Author: Tekin
* @Date:   2018-09-23 22:34:47
* @Last Modified 2018-09-23
*/
import yargs from 'yargs';

const args = yargs

  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })

  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv

export default args;