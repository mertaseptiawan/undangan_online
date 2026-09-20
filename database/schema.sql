-- Skema Database InviteNow (MySQL)

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `last_login` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL,
  `design_id` VARCHAR(50) NOT NULL,
  `groom_name` VARCHAR(255) NOT NULL,
  `bride_name` VARCHAR(255) NOT NULL,
  `location` TEXT NOT NULL,
  `event_date` DATE NOT NULL,
  `event_time` VARCHAR(50) NOT NULL,
  `groom_father` VARCHAR(255) NOT NULL,
  `groom_mother` VARCHAR(255) NOT NULL,
  `bride_father` VARCHAR(255) NOT NULL,
  `bride_mother` VARCHAR(255) NOT NULL,
  `groom_origin` VARCHAR(100) NOT NULL,
  `bride_origin` VARCHAR(100) NOT NULL,
  `bank_account` VARCHAR(100) NOT NULL,
  `cover_img` VARCHAR(255) NULL,
  `banner_img` VARCHAR(255) NULL,
  `payment_proof` VARCHAR(255) NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `galleries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT NOT NULL,
  `image_path` VARCHAR(255) NOT NULL,
  INDEX `idx_galleries_order_id` (`order_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `guestbook` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `design_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `status` ENUM('hadir', 'tidak') NOT NULL DEFAULT 'hadir',
  `message` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_guestbook_design_id` (`design_id`),
  INDEX `idx_guestbook_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
