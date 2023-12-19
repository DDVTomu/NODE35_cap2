import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BinhLuan extends Model {
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
    ma_nguoi_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NguoiDung',
        key: 'id'
      }
    },
    ngay_binh_luan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    noi_dung: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sao_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BinhLuan',
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
        name: "BinhLuan_FK",
        using: "BTREE",
        fields: [
          { name: "ma_nguoi_binh_luan" },
        ]
      },
      {
        name: "BinhLuan_FK_1",
        using: "BTREE",
        fields: [
          { name: "ma_phong" },
        ]
      },
    ]
  });
  }
}
