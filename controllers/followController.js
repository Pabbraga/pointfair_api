import { User } from "../models/User.js";

const followController = {
    follow: async(req, res) => {
        try {
            const id = req.params.id;
            const followingId = req.params.follow;
            if(!followingId) return res.status(404).json("Usuário não encotrado.")

            const user = await User.findById(id);
            user.following.push(followingId);

            await User.findByIdAndUpdate(id, user);
            return res.status(201).json("Seguindo.");
        } catch (err) {
            console.log(err);
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
        }
    },
    unfollow: async(req, res) => {
        try {
            const id = req.params.id;
            const followingId = req.params.follow;

            const user = await User.findById(id);
            for (let i = 0; i < user.following.length; i++) {
                if (user.following[i] == followingId) {
                    user.following.splice(i, 1);
                    i--;
                }
            }
            
            await User.findByIdAndUpdate(id, user);
            return res.status(201).json("Deixou de seguir.");
        } catch (err) {
            console.log(err);
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
        }
    }
}

export default followController;