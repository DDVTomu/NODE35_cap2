
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BinhLuanScalarFieldEnum = {
  id: 'id',
  ma_phong: 'ma_phong',
  ma_nguoi_binh_luan: 'ma_nguoi_binh_luan',
  ngay_binh_luan: 'ngay_binh_luan',
  noi_dung: 'noi_dung',
  sao_binh_luan: 'sao_binh_luan'
};

exports.Prisma.DatPhongScalarFieldEnum = {
  id: 'id',
  ma_phong: 'ma_phong',
  ngay_den: 'ngay_den',
  ngay_di: 'ngay_di',
  so_luong_khach: 'so_luong_khach',
  ma_nguoi_dat: 'ma_nguoi_dat'
};

exports.Prisma.NguoiDungScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  pass_word: 'pass_word',
  phone: 'phone',
  birth_day: 'birth_day',
  gender: 'gender',
  role: 'role',
  avatar: 'avatar'
};

exports.Prisma.PhongScalarFieldEnum = {
  id: 'id',
  ten_phong: 'ten_phong',
  khach: 'khach',
  phong_ngu: 'phong_ngu',
  giuong: 'giuong',
  phong_tam: 'phong_tam',
  mo_ta: 'mo_ta',
  gia_tien: 'gia_tien',
  may_giat: 'may_giat',
  ban_la: 'ban_la',
  tivi: 'tivi',
  dieu_hoa: 'dieu_hoa',
  wifi: 'wifi',
  bep: 'bep',
  do_xe: 'do_xe',
  ho_boi: 'ho_boi',
  ban_ui: 'ban_ui',
  hinh_anh: 'hinh_anh',
  ma_vi_tri: 'ma_vi_tri'
};

exports.Prisma.ViTriScalarFieldEnum = {
  id: 'id',
  ten_vi_tri: 'ten_vi_tri',
  tinh_thanh: 'tinh_thanh',
  quoc_gia: 'quoc_gia',
  hinh_anh: 'hinh_anh'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.BinhLuanOrderByRelevanceFieldEnum = {
  noi_dung: 'noi_dung'
};

exports.Prisma.NguoiDungOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  pass_word: 'pass_word',
  phone: 'phone',
  birth_day: 'birth_day',
  gender: 'gender',
  role: 'role',
  avatar: 'avatar'
};

exports.Prisma.PhongOrderByRelevanceFieldEnum = {
  ten_phong: 'ten_phong',
  mo_ta: 'mo_ta',
  hinh_anh: 'hinh_anh'
};

exports.Prisma.ViTriOrderByRelevanceFieldEnum = {
  ten_vi_tri: 'ten_vi_tri',
  tinh_thanh: 'tinh_thanh',
  quoc_gia: 'quoc_gia',
  hinh_anh: 'hinh_anh'
};


exports.Prisma.ModelName = {
  BinhLuan: 'BinhLuan',
  DatPhong: 'DatPhong',
  NguoiDung: 'NguoiDung',
  Phong: 'Phong',
  ViTri: 'ViTri'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
