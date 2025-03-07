import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

	return (
		<Box background={"#CE7457"}  borderRadius={"10"}>
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2} >
			<Flex alignItems={"center"} gap={2}>
				{creatorProfile ? (
					<Link to={`/${creatorProfile.username}` }>
						<Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"sm"} />
					</Link>
				) : (
					<SkeletonCircle size='10' />
				)}

				<Flex fontSize={12} fontWeight={"bold"} gap='2'>
					{creatorProfile ? (
						<Link to={`/${creatorProfile.username}`} background="#83f28f">{creatorProfile.username}</Link>
					) : (
						<Skeleton w={"100px"} h={"10px"} />
					)}

					<Box color={"#83f28f"}>• {timeAgo(post.createdAt)}</Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={12}
					color={"white"}
					fontWeight={"bold"}
					_hover={{
						color: "black",
					}}
					transition={"0.2s ease-in-out"}
					onClick={handleFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
			</Box>
		</Flex>
		</Box>
	);
};

export default PostHeader;
