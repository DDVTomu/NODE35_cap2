import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DatPhong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ma_phong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Phong',
        key: 'id'
      }
    },
    ngay_den: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ngay_di: {
      type: DataTypes.DATE,
      allowNull: true
    },
    so_luong_khach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ma_nguoi_dat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NguoiDung',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'DatPhong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "DatPhong_FK",
        using: "BTREE",
        fields: [
          { name: "ma_nguoi_dat" },
        ]
      },
      {
        name: "DatPhong_FK_1",
        using: "BTREE",
        fields: [
          { name: "ma_phong" },
        ]
      },
    ]
  });
  }
}
