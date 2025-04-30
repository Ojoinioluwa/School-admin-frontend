import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

interface Teacher {
  id: number;
  name: string;
  email: string;
  department: string;
  status: string;
  hireDate: string;
}

function TeachersInfo() {

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      <Card className="shadow-xl rounded-lg p-6">
        <Typography variant="h5" className="text-blue-900 font-semibold mb-4">
          Personal Information
        </Typography>

        {/* Avatar and Teacher's Name */}
        <Box className="flex flex-col items-center p-6 mb-4 bg-white rounded-xl shadow-md">
          <Avatar
            sx={{ width: 100, height: 100, border: "2px solid #4A90E2" }}
            src="https://avatar.iran.liara.run/public/77"
          />
          <Typography variant="h6" className="pt-2 text-blue-900 font-medium">
            OJo inioluwa
          </Typography>
        </Box>

        {/* Teacher's Basic Details */}
        <CardContent>
          <Typography variant="h6" className="text-blue-900 font-semibold mb-2">
            Basic Details
          </Typography>

          {/* Information Rows */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Typography className="text-gray-500">Department:</Typography>
              <Typography className="text-gray-900">Computer Science</Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="text-gray-500">Email:</Typography>
              <Typography className="text-gray-900 truncate">OJoinioluwa05@gmail.com</Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="text-gray-500">Teacher ID:</Typography>
              <Typography className="text-gray-900">lkjhghvb</Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="text-gray-500">Status:</Typography>
              <Typography className="text-gray-900">Active</Typography>
            </div>
            <div className="flex justify-between">
              <Typography className="text-gray-500">Hire Date:</Typography>
              <Typography className="text-gray-900">20234-132-24</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeachersInfo;
