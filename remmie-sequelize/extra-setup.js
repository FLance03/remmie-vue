function ExtraSetup(sequelize,DataTypes) {
	const { reservation, room_service, user } = sequelize.models;

	user.hasMany(reservation, {
		foreignKey: {
			name: 'user_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});
	reservation.belongsTo(user, {
		foreignKey: {
			name: 'user_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});

	user.hasMany(room_service, {
		foreignKey: {
			name: 'user_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});
	room_service.belongsTo(user, {
		foreignKey: {
			name: 'user_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});

	reservation.hasMany(room_service, {
		foreignKey: {
			name: 'reservation_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});
	room_service.belongsTo(reservation, {
		foreignKey: {
			name: 'reservation_id',
			type: DataTypes.BIGINT,
			allowNull: false,
		},
	});
}

module.exports = { ExtraSetup };