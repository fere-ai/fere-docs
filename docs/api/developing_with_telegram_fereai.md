---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Developing with Telegram x FereAI

This guide explains how to use FereAI's APIs with telegram deep integration.

There are broadly following steps.

1. Use [Create User Endpoint](#creating-a-user) to create a telegram user in FereAI
2. Use the [Get User Endpoint](#get-user-details) to get the user details by telegram user id
3. [Use the User ID](#using-user-details-in-fere-apis) obtained from above two methods in the API calls to FereAI APIs


## Creating a User

Creating a user on FereAI enables your users to access all the features of FereAI APIs, including Trading Agent
and Research Agent. With Telegram integration, you can simply pass the telegram user ID, chat ID, and username to create a user in FereAI.

These are used as below:

1. Telegram Chat ID and Telegram User ID are used to send messages to the user.
2. Username is used to identify the user in the system.
3. Telegram User ID is used to identify user in Trading Agent's endpoints.


<Tabs>
  <TabItem value="python" label="Python">
  <Details>
  <summary>Sample Code to create user in Python.</summary>

```python
import requests
from typing import Optional, Dict, Any, Literal
from enum import Enum
from pydantic import BaseModel
from uuid import UUID


class UserSignUpType(str, Enum):
    TELEGRAM = "TELEGRAM"
    EMAIL = "EMAIL"


class UserSignUp(BaseModel):
    email: Optional[str] = None
    name: Optional[str] = None
    phone_number: Optional[str] = None
    type: UserSignUpType
    tg_userid: Optional[str] = None
    tg_chat_id: Optional[str] = None
    tg_username: Optional[str] = None


class UserResponse(BaseModel):
    id: UUID
    email: Optional[str] = None
    name: Optional[str] = None
    phone_number: Optional[str] = None
    credits_available: int
    subscription_tier: str
    subscription_status: str
    subscription_end_date: Optional[str] = None
    tg_userid: Optional[str] = None
    tg_username: Optional[str] = None
    tg_chat_id: Optional[str] = None
    stripe_customer_id: Optional[str] = None
    airdrop_wallet_address: Optional[str] = None
    based_agent_wallet_address: Optional[str] = None
    private_mode: bool
    first_visit: bool


class SignupSuccessResponseModel(BaseModel):
    message: str
    user: UserResponse


def signup_user(base_url: str, user_data: UserSignUp) -> SignupSuccessResponseModel:
    """
    Sign up a user using the API

    Args:
        base_url: The base URL for the API
        user_data: User signup data

    Returns:
        SignupSuccessResponseModel: The API response

    Raises:
        requests.exceptions.RequestException: If the request fails
    """
    endpoint = f"{base_url}/signup"

    response = requests.post(
        endpoint,
        json=user_data.dict(exclude_none=True)
    )

    response.raise_for_status()
    return SignupSuccessResponseModel(**response.json())


# Example usage: Email signup
def signup_with_email(base_url: str, email: str, name: Optional[str] = None) -> SignupSuccessResponseModel:
    user_data = UserSignUp(
        email=email,
        name=name,
        type=UserSignUpType.EMAIL
    )
    return signup_user(base_url, user_data)


# Example usage: Telegram signup
def signup_with_telegram(
    base_url: str,
    tg_userid: str,
    tg_chat_id: str,
    tg_username: Optional[str] = None
) -> SignupSuccessResponseModel:
    user_data = UserSignUp(
        tg_userid=tg_userid,
        tg_chat_id=tg_chat_id,
        tg_username=tg_username,
        type=UserSignUpType.TELEGRAM
    )
    return signup_user(base_url, user_data)

```


</Details>
</TabItem>
  <TabItem value="ts" label="TypeScript" default>
  <Details>
  <summary>Sample Code to create user in Typescript.</summary>

```javascript
import axios, { AxiosResponse } from 'axios';

// Enums
enum UserSignUpType {
  TELEGRAM = "TELEGRAM",
  EMAIL = "EMAIL"
}

// Request Types
interface UserSignUp {
  email?: string;
  name?: string;
  phone_number?: string;
  type: UserSignUpType;
  tg_userid?: string;
  tg_chatid?: string;
  tg_username?: string;
}

// Response Types
interface UserResponse {
  id: string;
  email?: string;
  name?: string;
  phone_number?: string;
  credits_available: number;
  subscription_tier: string;
  subscription_status: string;
  subscription_end_date?: string;
  tg_userid?: string;
  tg_username?: string;
  tg_chatid?: string;
  stripe_customer_id?: string;
  airdrop_wallet_address?: string;
  based_agent_wallet_address?: string;
  private_mode: boolean;
  first_visit: boolean;
}

interface SignupSuccessResponseModel {
  message: string;
  user: UserResponse;
}

/**
 * Signs up a user with the API
 * @param baseUrl The base URL for the API
 * @param userData The user data for signup
 * @returns A promise that resolves to the signup response
 */
async function signupUser(
  baseUrl: string,
  userData: UserSignUp
): Promise<SignupSuccessResponseModel> {
  const endpoint = `${baseUrl}/signup`;

  try {
    const response: AxiosResponse<SignupSuccessResponseModel> = await axios.post(
      endpoint,
      userData
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.detail || error.message;
      throw new Error(`Signup failed: ${errorMessage}`);
    }
    throw error;
  }
}

/**
 * Signs up a user with email
 * @param baseUrl The base URL for the API
 * @param email The user's email
 * @param name Optional user's name
 * @returns A promise that resolves to the signup response
 */
async function signupWithEmail(
  baseUrl: string,
  email: string,
  name?: string
): Promise<SignupSuccessResponseModel> {
  const userData: UserSignUp = {
    email,
    name,
    type: UserSignUpType.EMAIL
  };

  return signupUser(baseUrl, userData);
}

/**
 * Signs up a user with Telegram credentials
 * @param baseUrl The base URL for the API
 * @param tgUserId The Telegram user ID
 * @param tgChatId The Telegram chat ID
 * @param tgUsername Optional Telegram username
 * @returns A promise that resolves to the signup response
 */
async function signupWithTelegram(
  baseUrl: string,
  tgUserId: string,
  tgChatId: string,
  tgUsername?: string
): Promise<SignupSuccessResponseModel> {
  const userData: UserSignUp = {
    tg_userid: tgUserId,
    tg_chatid: tgChatId,
    tg_username: tgUsername,
    type: UserSignUpType.TELEGRAM
  };

  return signupUser(baseUrl, userData);
}

// Example usage
async function exampleUsage() {
  const API_BASE_URL = "https://api.fereai.xyz/f";

  try {
    // Email signup example
    const emailResult = await signupWithEmail(
      API_BASE_URL,
      "user@example.com",
      "John Doe"
    );
    console.log(`Success: ${emailResult.message}`);
    console.log(`User ID: ${emailResult.user.id}`);

    // Telegram signup example
    const tgResult = await signupWithTelegram(
      API_BASE_URL,
      "123456789",
      "987654321",
      "johndoe"
    );
    console.log(`Success: ${tgResult.message}`);
    console.log(`User ID: ${tgResult.user.id}`);

  } catch (error) {
    console.error(`Error during signup: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Execute the example
exampleUsage();
```

  </Details>
</TabItem>
</Tabs>

## Get User Details

In order to use the Research Agent, your app will need the FereAI's user ID.
This info can be fetched from the below code sample.

<Tabs>
  <TabItem value="python" label="Python" >
  <Details>
  <summary>Sample Code to get user in Python.</summary>

```python
from typing import Optional, Dict, Any
import requests


def check_user_exists(
    base_url: str,
    email: Optional[str] = None,
    auth_tg_userid: Optional[str] = None
) -> Dict[str, Any]:
    """
    Check if a user exists by email or Telegram user ID

    Args:
        base_url: The base URL for the API
        email: Optional email to check
        auth_tg_userid: Optional Telegram user ID to check

    Returns:
        Dict with user data if found, or {"user": None} if not found

    Raises:
        requests.exceptions.RequestException: If the request fails
    """
    endpoint = f"{base_url}/check-user"
    params = {}

    if email:
        params["email"] = email
    elif auth_tg_userid:
        params["auth_tg_userid"] = auth_tg_userid
    else:
        raise ValueError("Either email or auth_tg_userid must be provided")

    response = requests.get(endpoint, params=params)
    response.raise_for_status()

    return response.json()


def get_user_by_telegram(
    base_url: str,
    tg_username: Optional[str] = None,
    tg_userid: Optional[str] = None
) -> Dict[str, Any]:
    """
    Get user details by Telegram username or user ID

    Args:
        base_url: The base URL for the API
        tg_username: Optional Telegram username
        tg_userid: Optional Telegram user ID

    Returns:
        Dict with user data including schedule_chats

    Raises:
        requests.exceptions.RequestException: If the request fails
        ValueError: If neither tg_username nor tg_userid is provided
    """
    endpoint = f"{base_url}/user/tg"
    params = {}

    if tg_username:
        params["tg_username"] = tg_username
    if tg_userid:
        params["tg_userid"] = tg_userid

    if not params:
        raise ValueError("Either tg_username or tg_userid must be provided")

    response = requests.get(endpoint, params=params)
    response.raise_for_status()

    return response.json()


# Example usage
if __name__ == "__main__":
    API_BASE_URL = "https://api.fereai.xyz/f"

    # Check user by email
    try:
        email_check = check_user_exists(API_BASE_URL, email="user@example.com")
        if email_check["user"]:
            print(f"User found with ID: {email_check['user']['id']}")
        else:
            print("No user found with that email")
    except requests.exceptions.RequestException as e:
        print(f"Error checking user by email: {e}")

    # Check user by Telegram ID
    try:
        tg_check = check_user_exists(API_BASE_URL, auth_tg_userid="123456789")
        if tg_check["user"]:
            print(f"User found with ID: {tg_check['user']['id']}")
        else:
            print("No user found with that Telegram ID")
    except requests.exceptions.RequestException as e:
        print(f"Error checking user by Telegram ID: {e}")

    # Get user details by Telegram username
    try:
        user_by_username = get_user_by_telegram(API_BASE_URL, tg_username="johndoe")
        print(f"User ID: {user_by_username['id']}")
        print(f"Schedule chats: {len(user_by_username['schedule_chats'])}")
    except requests.exceptions.RequestException as e:
        print(f"Error getting user by Telegram username: {e}")

    # Get user details by Telegram user ID
    try:
        user_by_id = get_user_by_telegram(API_BASE_URL, tg_userid="123456789")
        print(f"User ID: {user_by_id['id']}")
        print(f"Schedule chats: {len(user_by_id['schedule_chats'])}")
    except requests.exceptions.RequestException as e:
        print(f"Error getting user by Telegram user ID: {e}")
        ```
</Details>
        </TabItem>

  <TabItem value="ts" label="TypeScript" default>

  <Details>
  <summary>Sample Code to get user in Typescript.</summary>

```javascript
import axios, { AxiosResponse } from 'axios';

// Types for schedule chats
interface ScheduleChat {
  id: string;
  user_id: string;
  agent_name: string;
  // Add other fields as needed
  [key: string]: any;
}

// Types for UserExistsResponse
interface UserExistsResponse {
  user: UserResponse | null;
}

// Types for user by Telegram response
interface UserTelegramResponse extends UserResponse {
  schedule_chats: ScheduleChat[];
}

/**
 * Checks if a user exists by email or Telegram user ID
 * @param baseUrl The base URL for the API
 * @param email Optional email to check
 * @param authTgUserid Optional Telegram user ID to check
 * @returns A promise that resolves to the user existence response
 */
async function checkUserExists(
  baseUrl: string,
  email?: string,
  authTgUserid?: string
): Promise<UserExistsResponse> {
  if (!email && !authTgUserid) {
    throw new Error('Either email or authTgUserid must be provided');
  }

  const endpoint = `${baseUrl}/check-user`;
  const params: Record<string, string> = {};

  if (email) {
    params.email = email;
  }

  if (authTgUserid) {
    params.auth_tg_userid = authTgUserid;
  }

  try {
    const response: AxiosResponse<UserExistsResponse> = await axios.get(
      endpoint,
      { params }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.detail || error.message;
      throw new Error(`Failed to check user: ${errorMessage}`);
    }
    throw error;
  }
}

/**
 * Gets user details by Telegram username or user ID
 * @param baseUrl The base URL for the API
 * @param tgUsername Optional Telegram username
 * @param tgUserid Optional Telegram user ID
 * @returns A promise that resolves to the user details
 */
async function getUserByTelegram(
  baseUrl: string,
  tgUsername?: string,
  tgUserid?: string
): Promise<UserTelegramResponse> {
  if (!tgUsername && !tgUserid) {
    throw new Error('Either tgUsername or tgUserid must be provided');
  }

  const endpoint = `${baseUrl}/user/tg`;
  const params: Record<string, string> = {};

  if (tgUsername) {
    params.tg_username = tgUsername;
  }

  if (tgUserid) {
    params.tg_userid = tgUserid;
  }

  try {
    const response: AxiosResponse<UserTelegramResponse> = await axios.get(
      endpoint,
      { params }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.detail || error.message;
      throw new Error(`Failed to get user by Telegram: ${errorMessage}`);
    }
    throw error;
  }
}

// Example usage
async function exampleUsage() {
  const API_BASE_URL = "https://api.fereai.xyz/f";

  try {
    // Check user by email
    const emailCheck = await checkUserExists(API_BASE_URL, "user@example.com");
    if (emailCheck.user) {
      console.log(`User found with ID: ${emailCheck.user.id}`);
    } else {
      console.log("No user found with that email");
    }

    // Check user by Telegram ID
    const tgCheck = await checkUserExists(API_BASE_URL, undefined, "123456789");
    if (tgCheck.user) {
      console.log(`User found with ID: ${tgCheck.user.id}`);
    } else {
      console.log("No user found with that Telegram ID");
    }

    // Get user details by Telegram username
    const userByUsername = await getUserByTelegram(API_BASE_URL, "johndoe");
    console.log(`User ID: ${userByUsername.id}`);
    console.log(`Schedule chats: ${userByUsername.schedule_chats.length}`);

    // Get user details by Telegram user ID
    const userById = await getUserByTelegram(API_BASE_URL, undefined, "123456789");
    console.log(`User ID: ${userById.id}`);
    console.log(`Schedule chats: ${userById.schedule_chats.length}`);

  } catch (error) {
    console.error(`Error during API calls: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Execute the example
exampleUsage();
```
</Details>
  </TabItem>
</Tabs>

## Using User Details in Fere APIs

### Using the Trading Agent APIs

Set the headers as

<Tabs>

  <TabItem value="opt_1" label="With Telegram UserID" default>
  ```json
  {
    "X-FRIDAY-KEY": "yourAPIkey",
    "Content-Type": "application/json",
    "X-FRIDAY-TG-USERID": "9283"
  }
  ```
  </TabItem>
  <TabItem value="opt_2" label="With Fere UserID">
  ```json
  {
    "X-FRIDAY-KEY": "yourAPIkey",
    "Content-Type": "application/json",
    "X-FERE-USERID": "59bceb87-0fd5-47fa-b9e0-bf1f538e0001"
  }
  ```
  </TabItem>
</Tabs>

And then use the APIs as usual. Example in order to fetch the portfolio, the
endpoint would be

```bash
curl -X GET "https://api.fereai.xyz/ta/agent/portfolio/59bceb87-0fd5-47fa-b9e0-bf1f538e0001/" \
-H "accept: application/json" \
-H "X-FRIDAY-KEY: yourAPIkey" \
-H "X-FRIDAY-TG-USERID: 9283" \
-H "Content-Type: application/json"
```

### Using in FerePro Research Agent APIs

For these APIs, you will need to use the Fere User ID. You can obtain one from
[the get user details call](#get-user-details), and then use these APIs as usual.

:::tip
Our chat endpoints are in websocket, while telegram doesn't support it natively.
So you will need some way to do that. We have a snippet hosted at [https://gist.github.com/r4881t/eab56ba55c48edfd92350f305a6fece2](https://gist.github.com/r4881t/eab56ba55c48edfd92350f305a6fece2) for doing this.

This will provide you will a general idea on how to fetch chat and display it beautifully in
the telegram app screen.

:::