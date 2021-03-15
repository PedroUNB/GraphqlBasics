import User from '../../../models/User'

export default {
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`
    },
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),
        updateUser: (_, { id, data }) => User.findByIdAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id))
    },
}