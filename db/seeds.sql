-- Have to give it all this criteria because feeding the seeds in through Sequel Pro
-- says there aren't default values for the id, createdAt, or updatedAt.  Thus, 
-- they needed to be supplied manually
INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt) VALUES 
(1, "Cheeseburger", false, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
(2, "Turkey Burger", false, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
(3, "Veggie Burger", true, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));